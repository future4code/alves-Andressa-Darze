import express, {Request, Response} from "express"
import cors from "cors"

const app = express()

app.use(express.json())
app.use(cors())

// Exercicio 1

app.get('/', (req: Request, res: Response) => {
    res.send("Hello from Express!")
})

// Exercicio 2
type UserType = {
    id: string,
    name: string,
    phone: string,
    email: string,
    website: string
}

// Exercício 3

const user1 : UserType = {
    id: "1",
    name: "Andressa",
    phone: "71988969485",
    email: "andressadarze@gmail.com",
    website: "andressa-labenu.com.br"
}

const user2 : UserType = {
    id: "2",
    name: "David",
    phone: "7199999998",
    email: "david@gmail.com",
    website: "david-labenu.com.br"
}

const user3 : UserType = {
    id: "3",
    name: "Ayrton",
    phone: "11986239485",
    email: "ayrton@gmail.com",
    website: "ayrton-labenu.com.br"
}

const users: UserType[] = [user1, user2, user3]


// Exercício 4

app.get("/users", (req: Request, res: Response) => {
    users.length ? res.send(users) : res.send("Não tem usuários!")
})

// Exercício 5

type PostType = {
    id: string,
    title: string,
    body: string,
    userId: string
}

// Exercício 6

const posts : PostType[] = [
    {
        id: "1a",
        title: "Título 1",
        body: "jebflaifblafblafblkajbflsjbrflsireufljbfak jhdvkefvaewlfvalwfvlafl/ befiawbf",
        userId: "1"
    },
    {
        id: "2b",
        title: "Título 2",
        body: "jebflaifblafblafblkajbflsjbrflsireufljbfak jhdvkefvaewlfvalwfvlafl/ befiawbf",
        userId: "2"
    },
    {
        id: "3c",
        title: "Título 3",
        body: "jebflaifblafblafblkajbflsjbrflsireufljbfak jhdvkefvaewlfvalwfvlafl/ befiawbf",
        userId: "3"
    },
    {
        id: "4d",
        title: "Título 4",
        body: "jebflaifblafblafblkajbflsjbrflsireufljbfak befiawbf",
        userId: "3"
    }
]

// Exercício 7

app.get("/posts", (req: Request, res: Response) => {
    posts.length ? res.send(posts) : res.send("Não há posts!")
})

// Exercício 8

app.get("/posts/:userId", (req: Request, res: Response) => {
    
    let user = req.params.userId

    const postsByUser = posts.filter((post) => {
        return post.userId === user
    })

    postsByUser.length ? res.send(postsByUser) : res.send("Não há posts desse usuário!")
})

// Exercício 9 - Desafio 1 (Só tá dando erro)

app.delete("/post/:id", (req: Request, res: Response) => {
    
    const postId = req.params.id

    const postIndex = posts.findIndex((post) => {
        post.id === postId
    })

    postIndex === -1 ? res.send("Ocorreu um erro!") : posts.splice(postIndex, 1) && res.send(posts)
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
})
