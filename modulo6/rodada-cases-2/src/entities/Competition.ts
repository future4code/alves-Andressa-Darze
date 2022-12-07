export enum MODALITY {
    CEMRASOS = "100 metros rasos",
    DARDOS = "Lançamento de dardos"
}

export enum STATUS {
    ONGOING = "Em andamento",
    FINISHED = "Encerrada"
}

export interface ICompetitionDB {
    id: string,
    name: string,
    modality: MODALITY,
    unit: string,
    status: STATUS
}

export class Competition {
    constructor(
        private id: string,
        private name: string,
        private modality: MODALITY,
        private unit: string,
        private status: STATUS = STATUS.ONGOING
    ) {}

    public getId = () => {
        return this.id
    }

    public getName = () => {
        return this.name
    }

    public getModality = () => {
        return this.modality
    }

    public getUnit = () => {
        return this.unit
    }

    public getStatus = () => {
        return this.status
    }

    public setStatus = (newStatus: STATUS) => {
        this.status = newStatus
    }
}

export interface IAddCompInputDTO {
    name: string,
    modality: MODALITY,
    unit: string
}

export interface IChangeStatusInputDTO {
    id: string,
    newStatus: STATUS
}