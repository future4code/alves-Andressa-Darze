import ShowDatabase from "../database/ShowDatabase";
import { IAddShowInputDTO, IGetShowsInputDTO, IGetShowsOutputDTO, ITicketDB, ITicketInputDTO, Show } from "../entities/Show";
import { ILoginInputDTO, USER_ROLES } from "../entities/User";
import { IdNotFound, InvalidDate, InvalidToken, MissingFields, NotAuthorized, ShowOverbooked } from "../errors/BaseError";
import Authenticator from "../services/Authenticator";
import IdGenerator from "../services/IdGenerator";

class ShowBusiness {
    constructor(
       private showDatabase: ShowDatabase,
       private idGenerator: IdGenerator, 
       private authenticator: Authenticator
    ) {}

    public addShow = async (input: IAddShowInputDTO) => {
        const { token, band, startsAt} = input
        
        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        if(payload.role === USER_ROLES.NORMAL) {
            throw new NotAuthorized()
        }

        if(!band || !startsAt) {
            throw new MissingFields()
        }

        const date = new Date(startsAt)

        if(!date) {
            throw new InvalidDate()
        }

        // Validar se data não é anterior à atual e se já tem algum show marcado

        const id = this.idGenerator.generate()
        

        const show = new Show(
            id,
            band,
            date,
            0
        )

        await this.showDatabase.createShow(show)

        const response = {
            message: "Show marcado com sucesso!"
        }

        return response
    }

    public getAllShows = async(input: IGetShowsInputDTO) => {
        const token = input.token

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        const showsDB = await this.showDatabase.getAllShows()

        const shows = showsDB.map(showDB => {
            return new Show(
                showDB.id,
                showDB.band,
                showDB.starts_at
            )
        })

        for(let show of shows) {
            const showId = show.getId()
            const tickets = await this.showDatabase.getTicketsByShow(showId)
            show.setTickets(tickets)
        }

        const response : IGetShowsOutputDTO = {
            shows
        }

        return response
    }

    public bookShow = async(input: ITicketInputDTO) => {
        const { token, showId } = input

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        const showDB = await this.showDatabase.findById(showId)

        if(!showDB) {
            throw new IdNotFound()
        }

        const userId = payload.id

        const verifyTicket = await this.showDatabase.verifyTicket(showId, userId)

        if(verifyTicket.length > 0) {
            throw new NotAuthorized()
        }

        const ticketsByShow = await this.showDatabase.getTicketsByShow(showId)

        if(ticketsByShow >= 5000) {
            throw new ShowOverbooked()
        }

        const id = this.idGenerator.generate()

        const ticket: ITicketDB = {
            id,
            show_id: showId,
            user_id: userId
        }

        await this.showDatabase.bookShow(ticket)

        const response = {
            message: "Ticket reservado com sucesso!"
        }

        return response
    }
}

export default ShowBusiness