import jwt from "jsonwebtoken"
import dotenv from "dotenv"
import { USER_ROLES } from "../entities/User"

dotenv.config()

export interface ITokenPayload {
    id: string,
    role: USER_ROLES
}

export class Authenticator {
    generateToken(payload: ITokenPayload) {
        const token = jwt.sign(
            payload,
            process.env.JWT_KEY as string,
            {
                expiresIn: process.env.EXPIRES_IN
            }
        )
        return token
    }

    verifyToken(token: string) : ITokenPayload | null {
        try {
            const payload: ITokenPayload = jwt.verify(
                token,
                process.env.JWT_KEY as string) as any
    
            return payload

        } catch (error) {
            return null
        }
    }
}