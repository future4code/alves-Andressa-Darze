import { Request, Response } from "express"
import ResultBusiness from "../business/ResultBusiness";
import { IAddResultInputDTO } from "../entities/Result";

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
}

export default ResultController