import { MODALITY } from "../entities/Competition";
import { INewResult, IRankingDB, IResultDB, Result } from "../entities/Result";
import { BaseDatabase } from "./BaseDatabase";
import knex from "knex";

class ResultDatabase extends BaseDatabase {
    public static TABLE_RES_RASOS = "Case2_Results_Rasos"
    public static TABLE_RES_DARDOS = "Case2_Results_Dardos"

    public addResult = async (result: Result) => {
        const resultDB : IResultDB = {
            id: result.getId(),
            competition: result.getCompetition(),
            modality: result.getModality(),
            athlete: result.getAthlete(),
            value: result.getValue()
        }

        const newResult : INewResult = {
            id: resultDB.id,
            competition: resultDB.competition,
            athlete: resultDB.athlete,
            value: resultDB.value
        }

        if(resultDB.modality === MODALITY.CEMRASOS) {
            await BaseDatabase.connection(ResultDatabase.TABLE_RES_RASOS).insert(newResult)
        } else if(resultDB.modality === MODALITY.DARDOS) {
            await BaseDatabase.connection(ResultDatabase.TABLE_RES_DARDOS).insert(newResult)
        }

    }

    public findResultsByAthlete = async (athlete: string, competition: string, modality: MODALITY) => {
        if(modality === MODALITY.CEMRASOS) {
            const resultsDB : IResultDB[] = await BaseDatabase.connection(ResultDatabase.TABLE_RES_RASOS).select().where({competition, athlete})
            return resultsDB
        } else if (modality === MODALITY.DARDOS) {
            const resultsDB : IResultDB[] = await BaseDatabase.connection(ResultDatabase.TABLE_RES_DARDOS).select().where({competition, athlete})
            return resultsDB
        }
    }

    public getRanking = async (competition: string, modality: MODALITY) => {
        
        if(modality === MODALITY.CEMRASOS) {
            const resultsDB : IResultDB[] = await BaseDatabase
            .connection(ResultDatabase.TABLE_RES_RASOS)
            .select()
            .where({competition})
            .orderBy("value", "asc")
            return resultsDB

        } else if (modality === MODALITY.DARDOS) {
            const resultsDB = await BaseDatabase.connection.raw(`
            SELECT competition, athlete, max(value) FROM ${ResultDatabase.TABLE_RES_DARDOS} WHERE competition = "${competition}" GROUP BY athlete ORDER BY max(value) DESC;
            
            `)
            console.log(resultsDB[0])
            return resultsDB[0]
        }
    }
    
}

export default ResultDatabase