import { Modality } from "../entities/Competition";
import { Result } from "../entities/Result";
import { BaseDatabase } from "./BaseDatabase";

class ResultDatabase extends BaseDatabase {
    public static TABLE_RES_RASOS = "Case2_Results_Rasos"
    public static TABLE_RES_DARDOS = "Case2_Results_Dardos"

    public addResult = async (result: Result) => {
        const resultDB = {
            id: result.getId(),
            competition: result.getCompetition(),
            athlete: result.getAthlete(),
            value: result.getValue()
        }

        if(resultDB.competition === Modality.CEMRASOS) {
            await BaseDatabase.connection(ResultDatabase.TABLE_RES_RASOS).insert(resultDB)
        } else if(resultDB.competition === Modality.DARDOS) {
            await BaseDatabase.connection(ResultDatabase.TABLE_RES_DARDOS).insert(resultDB)
        }

    }
}

export default ResultDatabase