import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { User, Transaction} from './types';
import { users } from './data';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Função para ajeitar a data para o formato yyy/mm/dd
const nowDate = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
    const finalDate = `${year}/${month + 1}/${day}`

    return finalDate
}
// Criar conta de usuário
app.post("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, cpf, birthday } = req.body

        const newBirthday = Date.parse(birthday) // em milissegundos (no formato ano/mês/dia)
        const now = Date.now() // em milissegundos
        const msPerYear = 31536000000
        const diffYears = (now - newBirthday)/msPerYear

        if(diffYears < 18) {
            errorCode = 401
            throw new Error("O usuário tem que ser maior de idade para realizar cadastro.")
        }

        const checkCPF = users.find((user) => user.cpf === cpf)

        if(checkCPF) {
            errorCode = 409
            throw new Error("O CPF inserido já pertence a um usuário.")
        }

        const newUser: User = {
            name,
            cpf,
            birthday,
            balance: 0,
            extract: []
        }

        users.push(newUser)

        res.send(users)

    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})
// Pegar todos os usuários
app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})
// Pegar saldo de usuário através do CPF
app.get("/users/:cpf", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const cpf = req.params.cpf

        const userByCPF: User | undefined = users.find((user) => user.cpf === cpf)
    
        if(!userByCPF) {
            errorCode = 404
            throw new Error("O CPF inserido não está associado a nenhum usuário.")
        }
    
        res.send(`Saldo de ${userByCPF.name}: ${userByCPF.balance}`)

    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})
// Adicionar saldo à conta
app.put("/users", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const { name, cpf, value } = req.body

        const userIndex: number = users.findIndex((user) => user.cpf === cpf)

        // Checando se o cpf e nome correspondem a um usuário
        if(userIndex === -1 || users[userIndex].name !== name) {
            errorCode =  401
            throw new Error("Dados inválidos, tente novamente!")
        }

        // Atualizando o valor do saldo
        users[userIndex].balance = users[userIndex].balance + value

       // Pegando data atual no formato desejado
        const newDate = nowDate()

        // Criando novo ítem do extrato
        const newExtractItem : Transaction = {
            value,
            date: newDate,
            description: "Depósito de dinheiro"
        }
        // Acrescentando esse item ao array
        users[userIndex].extract.push(newExtractItem)

        // Retornando os usuários
        res.send(users)
        
    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }

})
// Pagar conta
app.post("/users/:cpf", (req: Request, res: Response) => {
    let errorCode = 400
    try {
        const cpf = req.params.cpf
        const { dueDate, description, value} = req.body
        const newDate = nowDate()

        // Validação de data de pagamento
        const msDueDate = Date.parse(dueDate) // dueDate em milissegundos
        const now = Date.now()
        const msPerDay = 86400000
        const diffInDays = (msDueDate - now)/msPerDay // diferença em dias

        if(diffInDays < 0) {
            errorCode = 422
            throw new Error("A data de pagamento não pode ser anterior à de hoje")
        }

        // Validação de montante a se pagar
        const userIndex: number = users.findIndex((user) => user.cpf === cpf)

        if(value > users[userIndex].balance) {
            errorCode = 422
            throw new Error("O valor inserido para pagamento é maior que o seu saldo.")
        }

        const newExtractItem : Transaction = {
            value: - value,
            date: dueDate ? dueDate : newDate,
            description
        }

        users[userIndex].extract.push(newExtractItem)

        res.send(users)
        
    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }

})
// Atualizar saldo do cliente
app.put("/users/:cpf", (req: Request, res: Response) => {
    const cpf = req.params.cpf

    const userIndex: number = users.findIndex((user) => user.cpf === cpf)

    // Somando valores do extrato
    let sum = 0
    for(let item of users[userIndex].extract) {

        // Condição de somente somar para as datas anteriores ou iguais a hoje
        const dueDate = Date.parse(item.date) // em milissegundos (no formato ano/mês/dia)
        const now = Date.now() // em milissegundos
        const msPerDay = 86400000
        const diffInDays = (now - dueDate)/msPerDay // diferença em dias

        if(diffInDays >= 0) {
            sum = sum + item.value
        }
    }

    users[userIndex].balance = users[userIndex].balance + sum

    res.send(users[userIndex])
})
// Transferência entre clientes
app.post("/transfer", (req: Request, res: Response) => {
    let errorCode = 400
   try {
        const { userName, userCPF, recipientName, recipientCPF, value } = req.body
        const date = nowDate()

        const userIndex = users.findIndex((user) => user.cpf === userCPF)
        const recipientIndex = users.findIndex((user) => user.cpf === recipientCPF)

        // Checando se ambas as contas existem
        if((userIndex || recipientIndex) === -1 || users[userIndex].name !== userName || users[recipientIndex].name !== recipientName) {
            errorCode =  401
            throw new Error("Conta(s) inexistente(s)!")
        }

        // Checando se valor a transferir é maior que o saldo do cliente
        if(value > users[userIndex].balance) {
            errorCode = 422
            throw new Error("O valor inserido para pagamento é maior que o seu saldo.")
        }

        const newUserExtract : Transaction = {
            value: -value,
            date: date,
            description: `Transferência interna para ${recipientName}`
        }

        const newRecipientExtract: Transaction = {
            value: value,
            date: date,
            description: `Transferência interna de ${userName}`
        }

        users[userIndex].extract.push(newUserExtract)
        users[recipientIndex].extract.push(newRecipientExtract)

        res.send(users)

   } catch (error: any) {
        res.status(errorCode).send({message: error.message})
   }
})


const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
})