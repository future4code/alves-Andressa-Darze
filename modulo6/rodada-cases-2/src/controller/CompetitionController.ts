import { Request, Response } from "express"
import CompetitionBusiness from "../business/CompetitionBusiness";
import { IAddCompInputDTO, IChangeStatusInputDTO } from "../entities/Competition";

class CompetitionController {
    constructor(
        private competitionBusiness: CompetitionBusiness
    ) {}

    public addCompetition = async (req: Request, res: Response) => {
        try {
            const { name, modality, unit} = req.body

            const input: IAddCompInputDTO = {
                name,
                modality,
                unit
            }

            const response = await this.competitionBusiness.addCompetition(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public changeStatus = async (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const newStatus = req.body.newStatus
    
            const input: IChangeStatusInputDTO = {
                id,
                newStatus
            }
    
            const response = await this.competitionBusiness.changeStatus(input)
    
            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
}

export default CompetitionController