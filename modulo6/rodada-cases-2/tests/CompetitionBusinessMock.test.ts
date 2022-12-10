import CompetitionBusiness from "../src/business/CompetitionBusiness"
import { IAddCompInputDTO, IChangeStatusInputDTO, MODALITY, STATUS } from "../src/entities/Competition"
import { BaseError } from "../src/errors/BaseError"
import { CompetitionDatabaseMock } from "./mocks/CompetitionDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"

describe("Testando a CompetitionBusiness", () => {

    const competitionBusiness = new CompetitionBusiness(
        new CompetitionDatabaseMock(),
        new IdGeneratorMock()
    )

    test("addCompetiiton: ao adicionar uma competição deve ser retornada uma mensagem de sucesso", async () => {
        const input : IAddCompInputDTO = {
            name: "mock-competition",
            modality: MODALITY.CEMRASOS,
            unit: "s"
        }

        const response = await competitionBusiness.addCompetition(input)

        expect(response.message).toBe("Competição criada com sucesso")
    })

    test("Erro ao não inserir uma ou mais informações ao criar uma competição", async () => {
        expect.assertions(2)
        try {
            const input : IAddCompInputDTO = {
                name: "",
                modality: MODALITY.CEMRASOS,
                unit: "s"
            }
            await competitionBusiness.addCompetition(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Informações devem ser passadas!")
            }
        }
    })

    test("Erro ao tentar adicionar uma competição que já está cadastrada", async () => {
        expect.assertions(2)
        try {
            const input : IAddCompInputDTO = {
                name: "Mock 100 metros rasos 1",
                modality: MODALITY.CEMRASOS,
                unit: "s"
            }
            await competitionBusiness.addCompetition(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Uma competição com este nome já foi criada nesta modalidade.")
            }
        }
    })

    test("changeStatus: ao mudar o status de uma competição deve ser retornada uma mensagem de sucesso", async () => {
        const input : IChangeStatusInputDTO = {
            id: "id-mock",
            newStatus: STATUS.FINISHED
        }
        const response = await competitionBusiness.changeStatus(input)

        expect(response.message).toBe("Status da competição alterado com sucesso")
    })

    test("Erro ao mudar status de uma competição que não existe", async () => {
        expect.assertions(2)
        try {
            const input : IChangeStatusInputDTO = {
                id: "outro-id-mock",
                newStatus: STATUS.FINISHED
            }
            await competitionBusiness.changeStatus(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Esta competição não existe no nosso banco de dados.")
            }
        }
    })

    test("Erro ao mudar status de uma competição cujo status é o mesmo do inserido", async () => {
        expect.assertions(2)
        try {
            const input : IChangeStatusInputDTO = {
                id: "id-mock",
                newStatus: STATUS.ONGOING
            }
            await competitionBusiness.changeStatus(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Este já é o status desta competição")
            }
        }
    })

})