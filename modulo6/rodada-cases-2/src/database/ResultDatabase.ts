import { MODALITY } from "../entities/Competition";
import { IResultDB, Result } from "../entities/Result";
import { BaseDatabase } from "./BaseDatabase";

class ResultDatabase extends BaseDatabase {
    public static TABLE_RES_RASOS = "Case2_Results_Rasos"
    public static TABLE_RES_DARDOS = "Case2_Results_Dardos"

    public addResult = async (result: Result) => {
        const resultDB : IResultDB = {
            id: result.getId(),
            competition: result.getCompetition(),
            athlete: result.getAthlete(),
            value: result.getValue()
        }

        if(result.getModality() === MODALITY.CEMRASOS) {
            await BaseDatabase.connection(ResultDatabase.TABLE_RES_RASOS).insert(resultDB)
        } else if(result.getModality() === MODALITY.DARDOS) {
            await BaseDatabase.connection(ResultDatabase.TABLE_RES_DARDOS).insert(resultDB)
        }

    }

    public findResultsByAthlete = async (athlete: string, competition: string, modality: MODALITY) => {
        if(modality === MODALITY.CEMRASOS) {
            const resultsDB : IResultDB[] = await BaseDatabase.connection(ResultDatabase.TABLE_RES_RASOS).select("value").where({competition, athlete})
            return resultsDB
        } else if (modality === MODALITY.DARDOS) {
            const resultsDB : IResultDB[] = await BaseDatabase.connection(ResultDatabase.TABLE_RES_DARDOS).select("value").where({competition, athlete})
            return resultsDB
        }
        
    }
}

export default ResultDatabase