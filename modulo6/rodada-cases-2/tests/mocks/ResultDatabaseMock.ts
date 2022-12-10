import { BaseDatabase } from "../../src/database/BaseDatabase"
import { MODALITY } from "../../src/entities/Competition"
import { IResultDardosDB, IResultDB, Result } from "../../src/entities/Result"

export class ResultDatabaseMock extends BaseDatabase {
    public static TABLE_RES_RASOS = "Case2_Results_Rasos"
    public static TABLE_RES_DARDOS = "Case2_Results_Dardos"

    public addResult = async (result: Result) : Promise<void> => {}

    public findResultsByAthlete = async (athlete: string, competition: string, modality: MODALITY) : Promise<IResultDB[]> => {
        if(athlete === "mock-athlete-1" && competition === "Mock 100 metros rasos 1" && modality === MODALITY.CEMRASOS) {
            const resultA : IResultDB[] = [
                {
                id: "id-mock",
                competition: "Mock 100 metros rasos 1",
                modality: MODALITY.CEMRASOS,
                athlete: "mock-athlete-1",
                value: 12.7
                }
            ]
            return resultA
        } else if(athlete === "mock-athlete-2" && competition === "Mock lançamento de dardos 1" && modality === MODALITY.DARDOS) {
            const results : IResultDB[] = [
                {
                    id: "id-mock",
                    competition: "Mock lançamento de dardos 1",
                    modality: MODALITY.DARDOS,
                    athlete: "mock-athlete-2",
                    value: 237
                },
                {
                    id: "id-mock",
                    competition: "Mock lançamento de dardos 1",
                    modality: MODALITY.DARDOS,
                    athlete: "mock-athlete-2",
                    value: 198
                },
                {
                    id: "id-mock",
                    competition: "Mock lançamento de dardos 1",
                    modality: MODALITY.DARDOS,
                    athlete: "mock-athlete-2",
                    value: 251
                }
            ]
            return results
        } else if(athlete === "mock-athlete-3" && competition === "Mock lançamento de dardos 1" && modality === MODALITY.DARDOS) {
            const results : IResultDB[] = [
                {
                    id: "id-mock",
                    competition: "Mock lançamento de dardos 1",
                    modality: MODALITY.DARDOS,
                    athlete: "mock-athlete-3",
                    value: 191
                },
                {
                    id: "id-mock",
                    competition: "Mock lançamento de dardos 1",
                    modality: MODALITY.DARDOS,
                    athlete: "mock-athlete-3",
                    value: 178
                }
            ]
            return results 
        } else {
            return []
        }
    }

    public getRanking = async (competition: string, modality: MODALITY) : Promise<IResultDB[] | IResultDardosDB[] | undefined> => {
        if(competition == "Mock 100 metros rasos 1" && modality === MODALITY.CEMRASOS) {
            const results : IResultDB[] = [
                {
                    id: "id-mock",
                    competition: "Mock 100 metros rasos 1",
                    modality: MODALITY.CEMRASOS,
                    athlete: "mock-athlete-1",
                    value: 11.2
                },
                {
                    id: "id-mock",
                    competition: "Mock 100 metros rasos 1",
                    modality: MODALITY.CEMRASOS,
                    athlete: "mock-athlete-2",
                    value: 12.7
                },
                {
                    id: "id-mock",
                    competition: "Mock 100 metros rasos 1",
                    modality: MODALITY.CEMRASOS,
                    athlete: "mock-athlete-3",
                    value: 14.1
                }
            ]
            return results
            
        } else if (competition === "Mock lançamento de dardos 1" && modality === MODALITY.DARDOS) {
            const results : IResultDardosDB[] = [
                {
                    competition: "Mock lançamento de dardos 1",
                    athlete: "mock-athlete-A",
                    "max(value)": 213
                },
                {
                    competition: "Mock lançamento de dardos 1",
                    athlete: "mock-athlete-B",
                    "max(value)": 203
                },
                {
                    competition: "Mock lançamento de dardos 1",
                    athlete: "mock-athlete-C",
                    "max(value)": 197
                }
            ]
            return results
            
        } else {
            return undefined
        }
    }
}