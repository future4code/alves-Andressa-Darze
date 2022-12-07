import UserBusiness from "../src/business/UserBusiness"
import { ILoginInputDTO, ISignupInputDTO } from "../src/entities/User"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { HashManagerMock } from "./mocks/HashManagerMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { UserDatabaseMock } from "./mocks/UserDatabaseMock"
import { BaseError } from "../src/error/error"

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

    // Testes de erro     --- APAGAR DEPOIS

    test("Erro no signup quando a 'password' possuir meno de 6 caracteres", async () => {
        expect.assertions(2)
        try {
            const input : ISignupInputDTO = {
                email: "sicrano@gmail.com",
                name: "sicrano",
                password: "sic"
            }

            await userBusiness.signup(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Senha inválida")
            }
        }
    })

    test("Erro no login quando o email não é cadastrado", async () => {
        try {
            expect.assertions(2)
            const input : ILoginInputDTO = {
                email: "fulano@gmail.com",
                password: "fulano123"
            }

            await userBusiness.login(input)

        } catch (error) {
            if(error instanceof BaseError){
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Email inserido não cadastrado")
            }
        }
    })
})