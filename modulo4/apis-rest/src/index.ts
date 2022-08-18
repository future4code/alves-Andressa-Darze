import express, {Express, Request, Response} from 'express'
import cors from 'cors'
import { users } from './data';
import { user } from './types';

const app: Express = express();

app.use(express.json());
app.use(cors());

// Exercício 1

app.get("/users", (req: Request, res: Response) => {
    res.send(users)
})

// Exercício 2
// app.get("/users?type=type", (req: Request, res: Response) => {
    
// })


const server = app.listen(3003, () => {
    console.log(`Server is running in http://localhost:3003`);
});