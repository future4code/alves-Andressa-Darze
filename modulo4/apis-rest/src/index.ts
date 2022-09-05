import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users } from './data';
import { User, UserType } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1

// app.get("/users", (req: Request, res: Response) => {
//     res.send(users)
// })

// Exercício 2
// a) Passei através de query parameters
// b) Usando enum
// app.get("/users", (req: Request, res: Response) => {
//     const type = req.query.type as UserType

//     const usersByType : User[] = users.filter((user) => {
//         return user.type === type
//     })

//     res.send(usersByType)
// })

// Exercício 3
// a) Query parameters
// b)

app.get("/users", (req: Request, res: Response) => {
    let errorCode: number = 400
    try {
        const name = req.query.name as string

        const user : User | undefined = users.find((user) => user.name === name)

        if(!user) {
            errorCode = 404
            throw new Error('User not found')
        }

        res.send(user)

    } catch (error: any) {
        res.status(errorCode).send({message: error.message})
    }
})

// Exercício 4
// a) nada.
// b) Não sei.

app.post("/users", (req: Request, res: Response) => {
    const { name, email, type, age } = req.body

    const newUser : User = {
        id: Date.now(),
        name,
        email,
        type,
        age
    }

    users.push(newUser)

    res.send(users)
})

// Exercício 5

app.put("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { name } = req.body

    const userIndex: number = users.findIndex((user) => user.id === id)

    users[userIndex].name = name

    res.send(users)
})

// Exercício 6 

app.patch("/users/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id)
    const { name } = req.body

    const userIndex: number = users.findIndex((user) => user.id === id)

    users[userIndex].name = name

    res.send(users)
})

// Exercício 8

app.delete("/users/:id", (req: Request, res:Response) => {
    const id = Number(req.params.id)

    const userIndex : number = users.findIndex((user) => user.id === id)

    users.splice(userIndex, 1)

    res.send(users)
})

const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});