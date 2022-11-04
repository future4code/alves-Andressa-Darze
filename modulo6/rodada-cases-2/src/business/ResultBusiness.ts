import { stringify } from "querystring";
import CompetitionDatabase from "../database/CompetitionDatabase";
import ResultDatabase from "../database/ResultDatabase";
import { MODALITY, STATUS } from "../entities/Competition";
import { IAddResultInputDTO, IGetRankingInputDTO, IGetRankingOutputDTO, IGetRankingRanking, IResultDardosDB, IResultDB, Result } from "../entities/Result";
import { CompetitionFinished, LimitReached, MissingFields, NonExistent, NullRanking, ResultAlreadyInserted } from "../errors/BaseError";
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

    public getRanking = async (input: IGetRankingInputDTO) => {
        const { competition, modality } = input

        const rankingDB = await this.resultDatabase.getRanking(competition, modality)

        if(!rankingDB) {
            throw new NullRanking()
        }

        if( modality === MODALITY.CEMRASOS) {
            const ranking = rankingDB.map((result: IResultDB) => {
                const newResult = new Result(
                    result.id,
                    result.competition,
                    result.modality,
                    result.athlete,
                    result.value
                )
                const rankingResponse : IGetRankingRanking = {
                    position: 0,
                    athlete: newResult.getAthlete(),
                    value: newResult.getValue()
                }
                return rankingResponse
            })

            for(let athlete of ranking) {
                athlete.position = ranking.indexOf(athlete) + 1
            }

            const response : IGetRankingOutputDTO = {
                ranking
            }

            return ranking


        } else if(modality === MODALITY.DARDOS) {
            const ranking = rankingDB.map((result: IResultDardosDB) => { 
                
                const rankingResponse = {
                    position: 0,
                    athlete: result.athlete, 
                    value: result["max(value)"]
                }
                return rankingResponse 
            })

            for(let athlete of ranking) {
                athlete.position = ranking.indexOf(athlete) + 1
            }

            const response : IGetRankingOutputDTO = {
                ranking
            }
            
            console.log(ranking) // APAGAR DEPOIS
            return ranking
        }
        
       
    }
}

export default ResultBusiness