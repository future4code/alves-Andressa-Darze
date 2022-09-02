import { Request, Response } from "express"
import connection from "../connection"
import { Product } from "../types"

const createPurchase = async (req: Request, res: Response) : Promise<void> => {
    try {
        const { userId, productId, quantity } = req.body

        // const [product] = await connection("labecommerce_products").select("*").where({id: productId})

        // console.log(product.price)

        // const totalPrice = quantity * product.price

        await connection("labecommerce_purchases").insert({
            id: Date.now(),
            user_id: userId,
            product_id: productId,
            quantity,
            // total_price: totalPrice 
        })

        res.status(201).end()
    } catch (error: any) {
        console.log(error)
        res.status(500).end()
    }
}

export default createPurchase