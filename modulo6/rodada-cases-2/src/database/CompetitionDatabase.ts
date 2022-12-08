import { Competition, ICompetitionDB, STATUS } from "../entities/Competition";
import { BaseDatabase } from "./BaseDatabase";

class CompetitionDatabase extends BaseDatabase {
    public static TABLE_COMP = "Case2_Competitions"

    public createCompetition = async (competition: Competition) => {
        const competitionDB : ICompetitionDB = {
            id: competition.getId(),
            name: competition.getName(),
            modality: competition.getModality(),
            unit: competition.getUnit(),
            status: competition.getStatus()
        }

        await BaseDatabase.connection(CompetitionDatabase.TABLE_COMP)
        .insert(competitionDB)
    }

    public changeStatus = async (id: string, newStatus: STATUS) => {
        await BaseDatabase.connection(CompetitionDatabase.TABLE_COMP)
        .update({status: newStatus})
        .where({id})
    }

    public findCompetitionByName = async (competition: string) : Promise<ICompetitionDB | undefined> => {
        const competitionDB : ICompetitionDB[] = await BaseDatabase
        .connection(CompetitionDatabase.TABLE_COMP)
        .select()
        .where({name: competition})

        return competitionDB[0]
    }
}

export default CompetitionDatabase