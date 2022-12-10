import { IShowDB, ITicketDB, ITicketDBDTO, Show } from "../entities/Show";
import { BaseDatabase } from "./BaseDatabase";

class ShowDatabase extends BaseDatabase {
    public static TABLE_SHOWS = "Lama_Shows"
    public static TABLE_TICKETS = "Lama_Tickets"

    public createShow = async (show: Show) => {
        const showDB: IShowDB = {
            id: show.getId(),
            band: show.getBand(),
            starts_at: show.getStartsAt()
        }

        await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS).insert(showDB)
    }

    public getAllShows = async () => {
        const showsDB: IShowDB[] = await BaseDatabase.connection(ShowDatabase.TABLE_SHOWS).select()

        return showsDB
    }

    public findById = async (id: string) => {
        const showDB: IShowDB[] = await BaseDatabase
        .connection(ShowDatabase.TABLE_SHOWS)
        .select()
        .where({id})

        return showDB[0]
    }

    public bookShow = async (ticket: ITicketDBDTO) => {
        const ticketDB: ITicketDB = {
            id: ticket.id,
            show_id: ticket.show_id,
            user_id: ticket.user_id
        }

        await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS).insert(ticketDB)
    }

    public verifyTicket = async (showId: string, userId: string) => {
        const ticketDB : ITicketDB[] = await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS).select().where({show_id: showId, user_id: userId})

        return ticketDB
    }

    public getTicketsByShow = async (showId: string) => {
        const result: any = await BaseDatabase.connection(ShowDatabase.TABLE_TICKETS)
        .select()
        .count("id AS tickets")
        .where({show_id: showId})

        return result[0].tickets as number
    }
}

export default ShowDatabase