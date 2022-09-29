import UserDatabase from "../database/UserDatabase";
import { ILoginInputDTO, ISignupInputDTO, User, USER_ROLES } from "../entities/User";
import { EmailExists, EmailNotFound, InvalidEmail, InvalidName, InvalidPassword, MissingFields } from "../errors/BaseError";
import Authenticator, { ITokenPayload } from "../services/Authenticator";
import HashManager from "../services/HashManager";
import IdGenerator from "../services/IdGenerator";

class UserBusiness {
    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager,
        private authenticator: Authenticator
    ) {}

    public signup = async (input: ISignupInputDTO) => {

        const { name, email, password } = input

        if(!name || !email || !password) {
            throw new MissingFields()
        }

        if(email.indexOf("@") === -1 || email.length < 3) {
            throw new InvalidEmail()
        }

        if(name.length < 3) {
            throw new InvalidName()
        }

        if(password.length < 6) {
            throw new InvalidPassword()
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(userDB) {
            throw new EmailExists()
        }

        const id = this.idGenerator.generate()
        const hashedPassword = await this.hashManager.hash(password)

        const user = new User(
            id,
            name,
            email,
            hashedPassword,
            USER_ROLES.ADMIN
        )

        await this.userDatabase.createUser(user)

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Cadastro realizado com sucesso!",
            token
        }

        return response
    }

    public login = async (input: ILoginInputDTO) => {
        const { email, password } = input

        if(!email || !password) {
            throw new MissingFields()
        }
        
        if(email.indexOf("@") === -1 || email.length < 3) {
            throw new InvalidEmail()
        }

        if(password.length < 6) {
            throw new InvalidPassword()
        }

        const userDB = await this.userDatabase.findByEmail(email)

        if(!userDB) {
            throw new EmailNotFound()
        }

        const user = new User(
            userDB.id,
            userDB.name,
            userDB.email,
            userDB.password,
            userDB.role
        )

        const isPasswordValid = await this.hashManager.compare(password, user.getPassword())

        if(!isPasswordValid) {
            throw new InvalidPassword
        }

        const payload: ITokenPayload = {
            id: user.getId(),
            role: user.getRole()
        }

        const token = this.authenticator.generateToken(payload)

        const response = {
            message: "Login realizado com sucesso!",
            token
        }

        return response

    }
}

export default UserBusiness