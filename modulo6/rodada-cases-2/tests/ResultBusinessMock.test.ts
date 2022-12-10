import ResultBusiness from "../src/business/ResultBusiness"
import { MODALITY } from "../src/entities/Competition"
import { IAddResultInputDTO, IGetRankingInputDTO } from "../src/entities/Result"
import { BaseError } from "../src/errors/BaseError"
import { CompetitionDatabaseMock } from "./mocks/CompetitionDatabaseMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { ResultDatabaseMock } from "./mocks/ResultDatabaseMock"

describe("Testando a ResultBusiness", () => {

    const resultBusiness = new ResultBusiness(
        new ResultDatabaseMock(),
        new CompetitionDatabaseMock(),
        new IdGeneratorMock()
    )

    // ADD RESULT
    test("addResult: adicionar um resultado de um atleta dos 100 METROS RASOS deve retornar uma mensagem de sucesso", async () => {
        const input : IAddResultInputDTO = {
            competition: "Mock 100 metros rasos 1",
            modality: MODALITY.CEMRASOS,
            athlete: "outro-mock-athlete",
            value: 12.3
        }
        const response = await resultBusiness.addResult(input)

        expect(response.message).toBe("Resultado inserido com sucesso")
    })

    test("addResult: adicionar mais um resultado de um atleta do LANÇAMENTO DE DARDOS deve retornar uma mensagem de sucesso, contanto que já não hajam 3", async () => {
        const input : IAddResultInputDTO = {
            competition: "Mock lançamento de dardos 1",
            modality: MODALITY.DARDOS,
            athlete: "mock-athlete-3",
            value: 12.3
        }
        const response = await resultBusiness.addResult(input)

        expect(response.message).toBe("Resultado inserido com sucesso")
    })

    test("Erro ao adicionar resultado por deixar um dos campos em branco", async () => {
        expect.assertions(2)
        try {
            const input : IAddResultInputDTO = {
                competition: "Mock 100 metros rasos 1",
                modality: MODALITY.CEMRASOS,
                athlete: "",
                value: 13.6
            }
            await resultBusiness.addResult(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(400)
                expect(error.message).toBe("Informações devem ser passadas!")
            }
        }
    })

    test("Erro ao adicionar resultado de uma competição que não existe", async () => {
        expect.assertions(2)
        try {
            const input : IAddResultInputDTO = {
                competition: "Outra competição",
                modality: MODALITY.CEMRASOS,
                athlete: "mock-athlete",
                value: 13.6
            }
            await resultBusiness.addResult(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Esta competição não existe no nosso banco de dados.")
            }
        }
    })

    test("Erro ao adicionar resultado de uma competição que já foi encerrada", async () => {
        expect.assertions(2)
        try {
            const input : IAddResultInputDTO = {
                competition: "Mock 100 metros rasos 2",
                modality: MODALITY.CEMRASOS,
                athlete: "mock-athlete",
                value: 13.6
            }
            await resultBusiness.addResult(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(422)
                expect(error.message).toBe("Esta competição já foi encerrada. Não é possível cadastrar novos resultados.")
            }
        }
    })

    test("Erro de adicionar mais de um resultado de um atleta nos 100 metros rasos", async () => {
        expect.assertions(2)
        try {
            const input : IAddResultInputDTO = {
                competition: "Mock 100 metros rasos 1",
                modality: MODALITY.CEMRASOS,
                athlete: "mock-athlete-1",
                value: 13.6
            }
            await resultBusiness.addResult(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Resultado deste atleta nesta competição já foi computado.")
            }
        }
    })

    test("Erro de adicionar mais de três resultados de um atleta no lançamento de dardos", async () => {
        expect.assertions(2)
        try {
            const input : IAddResultInputDTO = {
                competition: "Mock lançamento de dardos 1",
                modality: MODALITY.DARDOS,
                athlete: "mock-athlete-2",
                value: 13.6
            }
            await resultBusiness.addResult(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(409)
                expect(error.message).toBe("Já foram inseridos os resultados das 3 tentativas permitidas da competição nesta modalidade.")
            }
        }
    })

    // GET RANKING
    test("getRanking dos 100 metros rasos: deve retornar um array com 3 elementos", async () => {
        const input : IGetRankingInputDTO = {
            competition: "Mock 100 metros rasos 1",
            modality: MODALITY.CEMRASOS
        }
        const response = await resultBusiness.getRanking(input)

        expect(response?.ranking.length).toBe(3)
        expect(response?.ranking[0].position).toBe(1)
        expect(response?.ranking[2].value).toBe(14.1)
    })

    test("getRanking dolançamento de dardos: deve retornar um array com 3 elementos", async () => {
        const input : IGetRankingInputDTO = {
            competition: "Mock lançamento de dardos 1",
            modality: MODALITY.DARDOS
        }
        const response = await resultBusiness.getRanking(input)

        expect(response?.ranking.length).toBe(3)
        expect(response?.ranking[0].position).toBe(1)
        expect(response?.ranking[2].value).toBe(197)
    })

    test("Erro ao pedir ranking de competição não existente", async () => {
        expect.assertions(2)
        try {
            const input : IGetRankingInputDTO = {
                competition: "outra-competição",
                modality: MODALITY.CEMRASOS
            }
            await resultBusiness.getRanking(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Esta competição não existe no nosso banco de dados.")
            }
        }
    })

    test("Erro ao pedir ranking de competição da qual não foi registrado nenhum resultado ainda", async () => {
        expect.assertions(2)
        try {
            const input : IGetRankingInputDTO = {
                competition: "Mock 100 metros rasos 2",
                modality: MODALITY.CEMRASOS
            }
            await resultBusiness.getRanking(input)
        } catch (error) {
            if(error instanceof BaseError) {
                expect(error.statusCode).toBe(404)
                expect(error.message).toBe("Não há cadastros de resultados para esta competição")
            }
        } 
    })
})