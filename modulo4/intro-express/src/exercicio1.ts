import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

// Exercicio 1
app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Express!")
})

// Exercicio 2
type UserType = {
    id: number,
    name: string,
    phone: string,
    email: string,
    website: string
}

// Exercício 3

const user1 : UserType = {
    id: 1,
    name: "Andressa",
    phone: "71988969485",
    email: "andressadarze@gmail.com",
    website: "andressa-labenu.com.br"
}

const user2 : UserType = {
    id: 2,
    name: "David",
    phone: "7199999998",
    email: "david@gmail.com",
    website: "david-labenu.com.br"
}

const user3 : UserType = {
    id: 3,
    name: "Ayrton",
    phone: "11986239485",
    email: "ayrton@gmail.com",
    website: "ayrton-labenu.com.br"
}

const usersList: UserType[] = [user1, user2, user3]

app.post("/users", (req: Request, res: Response) => {
    console.log("chave do body =", req.body.chave)
    console.log("name do body =", req.body.name)
    console.log("numbers do body =", req.body.numbers)
    if(req.body.chave === "key"){
        res.send("O valor de chave é igual à key")
    } else {
        res.send("O valor da chave não é igual à key")
    }
})

// Exercício 4