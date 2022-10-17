export enum Modality {
    CEMRASOS = "100 metros rasos",
    DARDOS = "Lançamento de dardos"
}

export interface ICompetitionDB {
    id: string,
    name: string,
    modality: Modality,
    unit: string,
    status: boolean
}

export class Competition {
    constructor(
        private id: string,
        private name: string,
        private modality: Modality,
        private unit: string,
        private status: boolean = true
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
}

export interface IAddCompInputDTO {
    name: string,
    modality: Modality,
    unit: string
}