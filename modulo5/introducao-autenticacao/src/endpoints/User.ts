import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { EmailExists, EmailInvalid } from "../error/EmailError"
import { InvalidCredential } from "../error/IncorrectPassword"
import { MissingFields } from "../error/MissingFields"
import User from "../model/User"
import Authenticator from "../services/Authenticator"
import GenerateId from "../services/GenerateId"

class UserEndpoint {

    public async createUser(req: Request, res: Response) {

        try {
            
            const { email, password } = req.body

            // Validações:
            if(!email || !password) {
                throw new MissingFields()
            }

            if(email.indexOf("@") === -1) {
                throw new EmailInvalid()
            }

            if(password.length < 6) {
                throw new InvalidCredential()
            }

            const userData = new UserDataBase()

            const emailAlreadyExists = await userData.getUserByEmail(email)

            if(emailAlreadyExists.length) {
                throw new EmailExists()
            }

            // Criando id e novo usuário

            const id = new GenerateId().createId()

            const user = new User(id, email, password)

            await userData.createUser(user)

            const token = new Authenticator().generateToken(id)

            res.status(201).send({message: "Usuário cadastrado com sucesso!", token})


        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async login(req: Request, res: Response) {
        try {
            const { email, password } = req.body

            // Validações:
            if(!email || !password) {
                throw new MissingFields()
            }

            if(email.indexOf("@") === -1) {
                throw new EmailInvalid()
            }

            const userData = new UserDataBase()

            const user = await userData.getUserByEmail(email)

            const pass = await userData.getPasswordByEmail(email)

            if(user.password !== pass) {
                throw new InvalidCredential()
            }

            const token = new Authenticator().generateToken(user.id)

            res.status(200).send({message: "Login feito com sucesso!", token })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }

    async getUserInfo(req: Request, res: Response) {
        try {
            const token = req.headers.authorization!

            const id = new Authenticator().verifyToken(token)

            const userData = new UserDataBase()

            const user = await userData.getUserById(id)

            res.status(200).send({
                id: user.id,
                email: user.email
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint