export interface IResultDB {
    id: string,
    competition: string,
    athlete: string,
    value: number
}

export class Result {
    constructor(
        private id: string,
        private competition: string,
        private athlete: string,
        private value: number
    ) {}

    public getId = () => {
        return this.id
    }

    public getCompetition = () => {
        return this.competition
    }

    public getAthlete = () => {
        return this.athlete
    }

    public getValue = () => {
        return this.value
    }

}