import CompetitionDatabase from "../database/CompetitionDatabase";
import { Competition, IAddCompInputDTO } from "../entities/Competition";
import { MissingFields } from "../errors/BaseError";
import { IdGenerator } from "../services/IdGenerator";

class CompetitionBusiness {
    constructor(
        private competitionDatabase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ) {}

    public addCompetition = async(input: IAddCompInputDTO) => {
        const { name, modality, unit } = input

        if(!name || !modality || !unit) {
            throw new MissingFields()
        }

        const id = this.idGenerator.generate()

        const competition = new Competition(
            id,
            name,
            modality,
            unit
        )

        await this.competitionDatabase.createCompetition(competition)
    }
}

export default CompetitionBusiness