import ShowBusiness from "../business/ShowBusiness";
import { Request, Response } from "express"
import { IAddShowInputDTO, IGetShowsInputDTO, ITicketInputDTO } from "../entities/Show";

class ShowController {
    constructor(
        private showBusiness: ShowBusiness
    ) {}

    public addShow = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const band =  req.body.band
            const startsAt = req.body.starts_at

            const input: IAddShowInputDTO = {
                token,
                band,
                startsAt
            }

            const response = await this.showBusiness.addShow(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public getAllShows = async(req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const input : IGetShowsInputDTO = {
                token
            }

            const response = await this.showBusiness.getAllShows(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public bookShow = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const showId = req.body.showId
    
            const input : ITicketInputDTO = {
                token,
                showId
            }
    
            const response = await this.showBusiness.bookShow(input)
    
            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
    
}

export default ShowController