import express, {Request, Response} from "express";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1

app.get("/ping", (req: Request, res: Response) => {
    res.send("pong")
})

// Exercício 2 

type TasksType = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}

// Exercício 3

const tasks : TasksType[] = [
    {
        userId: 1,
        id: 11,
        title: "Lavar roupa",
        completed: false
    },
    {
        userId: 2,
        id: 22,
        title: "Estudar",
        completed: true
    },
    {
        userId: 3,
        id: 33,
        title: "Treinar",
        completed: true
    },
    {
        userId: 4,
        id: 44,
        title: "Limpar a casa",
        completed: false
    }
]

// Exercício 4
// Tentar usando o req.query depois!!
app.get("/tasks/:completed", (req: Request, res: Response) => {
    let completed = req.params.completed

    if(completed !== "true" && completed !=="false") {
        res.send("Parâmetro do endpoint inválido, tente novamente!")
    }
   
    let tasksList = tasks.filter((task) => {
        return String(task.completed) === completed
    })

    tasksList.length ? res.send(tasksList) : res.send("Não há tarefas")
})

// Exercício 5

app.post("/tasks", (req: Request, res: Response) => {
    const {userId, id, title, completed} = req.body

    tasks.push({
        userId,
        id,
        title,
        completed
    })

    res.send(tasks)
})

// Exercício 6
// NÃO TÁ FUNCIONANDO - TENTAR DEPOIS
app.put("/task/:id", (req: Request, res: Response) => {
    const taskId = Number(req.params.id)

    const task = tasks.find((task) => task.id === taskId)

    if(task) {
            task.completed == !task.completed
    } else {
        res.send("Tarefa não encontrada!")
    }

    res.send(tasks)
})

// Exercício 7
// MESMO ERRO DO EXERCÍCIO DE ONTEM - RESOLVER!!!
app.delete("/task/:id", (req: Request, res: Response) => {
    const taskId = Number(req.params.id)

    const taskIndex = tasks.findIndex((task) => {
        task.id === taskId
    })

    taskIndex === -1 ? res.send("Ocorreu um erro!") : tasks.splice(taskIndex, 1) && res.send (tasks)
    res.end()
})

app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});