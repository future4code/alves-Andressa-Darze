import CompetitionDatabase from "../database/CompetitionDatabase";
import { Competition, IAddCompInputDTO, IChangeStatusInputDTO, MODALITY, STATUS } from "../entities/Competition";
import { AlreadyExists, MissingFields, NonExistent, SameStatus } from "../errors/BaseError";
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

        const competitionDB = await this.competitionDatabase.findCompetitionByName(name)

        if( competitionDB && competitionDB.modality === modality) {
            throw new AlreadyExists()
        }

        const id = this.idGenerator.generate()

        const competition = new Competition(
            id,
            name,
            modality,
            unit
        )

        await this.competitionDatabase.createCompetition(competition)

        const response = {
            message: "Competição criada com sucesso"
        }

        return response
    }

    public changeStatus = async (input: IChangeStatusInputDTO) => {
        const { id, newStatus } = input

        const competitionDB = await this.competitionDatabase.findCompetitionById(id)

        if(!competitionDB) {
            throw new NonExistent()
        }

        if(competitionDB.status === newStatus) {
            throw new SameStatus()
        }

        await this.competitionDatabase.changeStatus(id, newStatus)

        const response = {
            message: "Status da competição alterado com sucesso"
        }

        return response
    }
}

export default CompetitionBusiness