import { BaseDatabase } from "../../src/database/BaseDatabase"
import { Competition, ICompetitionDB, MODALITY, STATUS } from "../../src/entities/Competition"

export class CompetitionDatabaseMock extends BaseDatabase {
    public static TABLE_COMP = "Case2_Competitions"

    public createCompetition = async (competition: Competition) : Promise<void> => {}

    public changeStatus = async (id: string, newStatus: STATUS) : Promise<void> => {}

    public findCompetitionByName = async (competition: string) : Promise<ICompetitionDB | undefined> => {
        switch (competition) {
            case "Mock 100 metros rasos 1":
                const competitionA : ICompetitionDB = {
                    id: "id-mock",
                    name: "Mock 100 metros rasos 1",
                    modality: MODALITY.CEMRASOS,
                    unit: "s",
                    status: STATUS.ONGOING
                }
                return competitionA
            case "Mock 100 metros rasos 2":
                const competitionC : ICompetitionDB = {
                    id: "id-mock",
                    name: "Mock 100 metros rasos 1",
                    modality: MODALITY.CEMRASOS,
                    unit: "s",
                    status: STATUS.FINISHED
                }
                return competitionC   
            case "Mock lançamento de dardos 1":
                const competitionB : ICompetitionDB = {
                    id: "id-mock",
                    name: "Mock lançamento de dardos 1",
                    modality: MODALITY.DARDOS,
                    unit: "m",
                    status: STATUS.ONGOING
                }
                return competitionB
            default:
                return undefined
        }
    }

    public findCompetitionById = async (id: string) : Promise<ICompetitionDB | undefined> => {
        switch (id) {
            case "id-mock":
                const competitionA : ICompetitionDB = {
                    id: "id-mock",
                    name: "Mock 100 metros rasos 1",
                    modality: MODALITY.CEMRASOS,
                    unit: "s",
                    status: STATUS.ONGOING
                }
                return competitionA
            default:
                return undefined
        }
    }
}