import { Request, Response } from "express"
import connection from "../connection"

const addProduct = async (req: Request, res: Response) : Promise<void> => {
    try {
        const { name, price, image_url } = req.body
        await connection("labecommerce_products").insert({
            id: Date.now(),
            name,
            price,
            image_url
        })
        res.status(201).end()
    } catch (error:any) {
        res.status(500).end()
    }
}

export default addProduct