import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

// Editar a interface de payload
export interface ITokenPayload {
    id: string
}

class Authenticator {
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

export default Authenticator