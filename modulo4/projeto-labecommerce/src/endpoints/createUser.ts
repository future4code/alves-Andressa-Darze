import { Request, Response } from 'express'
import connection from '../connection'

const createUser = async (req: Request, res: Response): Promise<void> => {
    try {

        const { name, email, password } = req.body

        await connection("labecommerce_users").insert({
            id: Date.now(),
            name,
            email,
            password
        })

        res.status(201).end()

    } catch (error: any) {
        res.status(500).end()
    }
}

export default createUser