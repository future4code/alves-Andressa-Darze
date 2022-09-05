import express, {Request, Response} from "express";
import cors from "cors";
import { Product, products } from "./data";


const app = express();

app.use(express.json());
app.use(cors());

// Exercício 1

app.get("/test", (req: Request, res: Response) => {
    res.send("A API está funcionando!")
})

// Exercício 3
// Exercício 7 - Quando não insiro nada no body, a mensagem de erro não vai
app.post("/products", (req: Request, res: Response) => {
   try {
        const {name, price} = req.body

        if(price <= 0) {
            res.statusCode = 422
            throw new Error("O preço deve ser um valor maior que 0")
        }
        else if(!name || !price) {
            res.statusCode = 401
            throw new Error("Não pode mandar valores vazios")
        } else if(typeof name !== "string" || typeof price !== "number") {
            res.statusCode = 401
            throw new Error("Valores dos parâmetros inválidos")
        } 

        const newProduct : Product = {
            id: String(Date.now()),
            name,
            price
        }

        products.push(newProduct)
        res.send(products)
        
   } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
   }
})

// Exercício 4

app.get("/products", (req: Request, res: Response) => {
    res.send(products)
})

// Exercício 5
// Exercício 8 - Quando não insiro nada no body, a mensagem de erro não vai

app.put("/product/:id", (req: Request, res: Response) => {
    try {
    const id = req.params.id
    const {price} = req.body

    if(price <= 0) {
        res.statusCode = 422
        throw new Error("O preço deve ser um valor maior que zero")
    } else if(!price) {
        res.statusCode = 401
        throw new Error("Não pode mandar valores vazios")
    } else if(typeof price !== "number") {
        res.statusCode = 401
        throw new Error("Deve inserir um número")
    }

    const productIndex = products.findIndex((product) => product.id === id)
    
    if(productIndex === -1) {
        res.statusCode = 401
        throw new Error("Produto não encontrado")
    }

    products[productIndex].price = price

    res.send(products)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})

// Exercício 6
// Exercício 9
app.delete("/product/:id", (req: Request, res: Response) => {
    try {
        const id = req.params.id
    
        const productIndex = products.findIndex((product) => product.id === id)

        if(productIndex === -1) {
            res.statusCode = 401
            throw new Error("Produto não encontrado")
        }

        products.splice(productIndex, 1)

        res.send(products)

    } catch (error: any) {
        res.status(res.statusCode || 500).send({message: error.message})
    }
})


app.listen(3003, () => {
    console.log("Server is running in http://localhost:3003")
});