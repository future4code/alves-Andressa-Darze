import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { User, Extract, Transaction } from './types';
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
            extract: [],
            transaction: []
        }

        users.push(newUser)

        res.send(users)

    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

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
        const newExtractItem : Extract = {
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

app.post("/users/payment", (req: Request, res: Response) => {
    const { dueDate, description, value, cpf } = req.body
    const newDate = nowDate()

    const userIndex: number = users.findIndex((user) => user.cpf === cpf)

    const newExtractItem : Extract = {
        value: - value,
        date: dueDate ? dueDate : newDate,
        description
    }

    users[userIndex].extract.push(newExtractItem)

    res.send(users)

})

app.put("/users/:cpf", (req: Request, res: Response) => {
    const cpf = req.params.cpf

    const userIndex: number = users.findIndex((user) => user.cpf === cpf)

    // Somando valores do extrato
    let sum = 0
    for(let item of users[userIndex].extract) {

        const dueDate = Date.parse(item.date) // em milissegundos (no formato ano/mês/dia)
        const now = Date.now() // em milissegundos
        const msPerDay = 86400000
        const diffYears = (now - dueDate)/msPerDay // diferença em dias

        if(diffYears >= 0) {
            sum = sum + item.value
        }
    }

    users[userIndex].balance = users[userIndex].balance + sum

    res.send(users[userIndex])
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
})