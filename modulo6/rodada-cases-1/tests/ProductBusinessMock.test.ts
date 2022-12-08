import ProductBusiness from "../src/business/ProductBusiness"
import { IInputDBDTO, IProductsInputDTO } from "../src/entities/Product"
import { BaseError } from "../src/errors/BaseError"
import { ProductDatabaseMock } from "./mocks/ProductDatabaseMock"

describe("Testando a ProductBusiness", () => {

    const productBusiness = new ProductBusiness(
        new ProductDatabaseMock()
    )

    test("O insertData deve retornar uma mensagem de sucesso", async () => {
        const input : IProductsInputDTO[] = [
            {
                id: 111,
                name: "mock-name",
                tags: ["mock-tag"]
            }
        ]
        const response = await productBusiness.insertData(input)

        expect(response.message).toBe("Dados dos produtos inseridos com sucesso!")
    })

    test("Erro na inserção de produtos se o array vier vazio", async () => {
        expect.assertions(2)
        try {
            const input : IProductsInputDTO[] = []
            await productBusiness.insertData(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Informações devem ser passadas!")
            }
        }
    })

    test("testando o searchById", async () => {
        const input : string =  "id-mock-A"
        const output = await productBusiness.searchById(input)

        expect(output.id).toBe("id-mock-A")
        expect(output.name).toBe("Name Mock A")

    })

    test("Erro na busca quando nao há produto cadastrado com esse id", async () => {
        expect.assertions(2)
        try {
            const input: string = "outro-id"
            await productBusiness.searchById(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Não existe um produto cadastrado com essas características")
            }
        }
    })

    test("Erro na busca quando o id não é inserido", async () => {
        expect.assertions(2)
        try {
            const input : string = ""
            await productBusiness.searchById(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Informações devem ser passadas!")
            }
        }
    })

    test("O searchByName deve retornar uma array com 2 elementos", async () => {
        const input: string = "Mock"
        const output = await productBusiness.searchByName(input)

        expect(output.length).toBe(2)
    })

    test("Erro na busca quando não há produto com este nome", async () => {
        expect.assertions(2)
        try {
            const input : string = "Milkshake"
            await productBusiness.searchByName(input)

        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Não existe um produto cadastrado com essas características")
            }
        }
    })

    test("O searchByCategory deve retornar um array com dois elementos", async () => {
        const input: string = "tag-mock"
        const output = await productBusiness.searchByCategory(input)

        expect(output.length).toBe(2)
        expect(output[0].id).toBe("id-mock-A")
        expect(output[0].name).toBe("Name Mock A")
    })

    test("Erro na busca quando a categoria não é inserida", async () => {
        expect.assertions(2)
        try {
            const input: string = ""
            await productBusiness.searchByCategory(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Informações devem ser passadas!")
            }
        }
    })

    test("Erro na busca quando não há produtos nesta categoria ou ela não existe", async () => {
        expect.assertions(2)
        try {
            const input : string = "Milkshake"
            await productBusiness.searchByCategory(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(401)
                expect(error.message).toBe("Não existe um produto cadastrado com essas características")
            }
        }
    })
})