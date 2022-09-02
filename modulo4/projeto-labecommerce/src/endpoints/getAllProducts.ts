import { Request, Response } from "express"
import connection from "../connection"
import { Product } from "../types"

const getAllProducts = async (req: Request, res: Response) : Promise<void> => {
    try {
        const products : Product[] = await connection("labecommerce_products")
        res.status(200).send(products)
    } catch (error: any) {
        res.status(500).send("Unexpected server error")
    }
}

export default getAllProducts