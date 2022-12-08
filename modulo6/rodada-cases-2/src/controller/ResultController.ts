import { Request, Response } from "express"
import ResultBusiness from "../business/ResultBusiness";
import { IAddResultInputDTO, IGetRankingInputDTO, IGetRankingOutputDTO, IRankingDB } from "../entities/Result";

class ResultController {
    constructor(
        private resultBusiness: ResultBusiness
    ) {}

    public addResult = async (req: Request, res: Response) => {
        try {
            const { competition, modality, athlete, value } = req.body

            const input : IAddResultInputDTO = {
                competition,
                modality,
                athlete,
                value
            }

            const response = await this.resultBusiness.addResult(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getRanking = async (req: Request, res: Response) => {
        try {
            const { competition, modality } = req.body

            const input : IGetRankingInputDTO = {
                competition,
                modality
            }

            const response : IGetRankingOutputDTO = await this.resultBusiness.getRanking(input)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
}

export default ResultController