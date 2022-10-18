import CompetitionDatabase from "../database/CompetitionDatabase";
import ResultDatabase from "../database/ResultDatabase";
import { MODALITY, STATUS } from "../entities/Competition";
import { IAddResultInputDTO, Result } from "../entities/Result";
import { CompetitionFinished, LimitReached, MissingFields, NonExistent, ResultAlreadyInserted } from "../errors/BaseError";
import { IdGenerator } from "../services/IdGenerator";

class ResultBusiness {
    constructor(
        private resultDatabase: ResultDatabase,
        private competitionDatabase: CompetitionDatabase,
        private idGenerator: IdGenerator
    ) {}

    public addResult = async (input: IAddResultInputDTO) => {
        const { competition, modality, athlete, value } = input

        if(!competition || !athlete || !value) {
            throw new MissingFields()
        }

        const competitionDB = await this.competitionDatabase.findCompetitionByName(competition)

        if(!competitionDB) {
            throw new NonExistent()
        }

        if(competitionDB.status === STATUS.FINISHED) {
            throw new CompetitionFinished()
        }

        const resultsDB = await this.resultDatabase.findResultsByAthlete(athlete, competition, modality)

        console.log(resultsDB) // APAGAR DEPOIS

        if(modality === MODALITY.CEMRASOS && resultsDB?.length !== 0) {
            throw new ResultAlreadyInserted()
        } else if(modality ===  MODALITY.DARDOS && resultsDB?.length === 3) {
            throw new LimitReached()
        }

        const id = this.idGenerator.generate()

        const result = new Result(
            id,
            competition,
            modality,
            athlete,
            value
        )

        await this.resultDatabase.addResult(result)

        const response = {
            message: "Resultado inserido com sucesso"
        }

        return response
    }
}

export default ResultBusiness