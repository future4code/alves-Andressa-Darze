import { Request, Response } from "express"
import { UserDataBase } from "../data/UserDataBase"
import { EmailExists, EmailInvalid } from "../error/EmailError"
import { InvalidCredential } from "../error/IncorrectPassword"
import { MissingFields } from "../error/MissingFields"
import User from "../model/User"
import Authenticator, {ITokenPayload} from "../services/Authenticator"
import GenerateId from "../services/GenerateId"
import HashManager from "../services/HashManager"
import { USER_ROLES } from "../types"


class UserEndpoint {

    public async createUser(req: Request, res: Response) {

        try {
            
            const { email, password, role } = req.body

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

            // const user = new User(id, email, password)

            const hashManager = new HashManager()
            const hash = await hashManager.hash(password)

            const user = new User(id, email, hash, role)

            await userData.createUser(user)

            const payload: ITokenPayload = {
                id,
                role
            }

            const token = new Authenticator().generateToken(payload)

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

            // if(user.password !== pass) {
            //     throw new InvalidCredential()
            // }

            const hashManager = new HashManager()
            const checkingPassword = await hashManager.compare(password, pass)

            if(!checkingPassword) {
                throw new InvalidCredential()
            }

            const payload: ITokenPayload = {
                id: user.id,
                role: user.role
            }

            const token = new Authenticator().generateToken(payload)

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
                email: user.email,
                role: user.role
            })

        } catch (error: any) {
            res.status(error.statusCode || 500).send({ message: error.message })
        }
    }
}

export default UserEndpoint