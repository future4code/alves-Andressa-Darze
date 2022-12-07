import UserBusiness from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/entities/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"

describe("Testando a UserBusiness", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new HashManagerMock(),
        new AuthenticatorMock()
    )

    test("signup: um token é retornado quando o cadastro é bem sucedido", async () => {
        const input : ISignupInputDTO = {
            name: "andressa",
            email: "andressa@gmail.com",
            password: "hash-mock"
        }

        const response = await userBusiness.signup(input)

        expect(response.message).toBe("Cadastro realizado com sucesso!")
        expect(response.token).toBe("token-mock-normal")
    })

    test("login: um token é retornado quando o login é bem sucedido", async () => {
        const input : ILoginInputDTO = {
            email: "astrodev@gmail.com",
            password: "bananinha"
        }

        const response = await userBusiness.login(input)
        
        expect(response.message).toBe("Login realizado com sucesso")
        expect(response.token).toBe("token-mock-admin")
    })
})