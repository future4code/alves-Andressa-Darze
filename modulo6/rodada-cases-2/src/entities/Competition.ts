export enum Modality {
    CEMRASOS = "100 metros rasos",
    DARDOS = "Lançamento de dardos"
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