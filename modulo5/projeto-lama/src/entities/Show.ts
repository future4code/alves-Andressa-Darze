export interface IShowDB {
    id: string,
    band: string,
    starts_at: Date
}

export interface ITicketDB {
    id: string,
    show_id: string,
    user_id: string
}

export interface ITicketDBDTO {
    id: string,
    show_id: string,
    user_id: string
}

export interface ITicketInputDTO {
    token: string,
    showId: string
}

export class Show {
    constructor(
        private id: string,
        private band: string,
        private startsAt: Date,
        private tickets: number = 0
    ) {}

    public getId = () => {
        return this.id
    }

    public getBand = () => {
        return this.band
    }

    public getStartsAt = () => {
        return this.startsAt
    }

    public getTickets = () => {
        return this.tickets
    }

    public setTickets = (newTickets: number) => {
        this.tickets = newTickets
    }
}

export interface IAddShowInputDTO {
    token: string,
    band: string,
    startsAt: string
}

export interface IGetShowsInputDTO {
    token: string
}

export interface IGetShowsOutputDTO {
    shows: Show[]
}
