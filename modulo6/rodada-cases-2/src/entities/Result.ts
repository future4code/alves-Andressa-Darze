import { MODALITY } from "./Competition"

export interface IResultDB {
    id: string,
    competition: string,
    modality: MODALITY,
    athlete: string,
    value: number
}

export interface IRankingDB {
    competition: string, // remover depois
    athlete: string,
    value: number
}

export class Result {
    constructor(
        private id: string,
        private competition: string,
        private modality: MODALITY,
        private athlete: string,
        private value: number
    ) {}

    public getId = () => {
        return this.id
    }

    public getCompetition = () => {
        return this.competition
    }

    public getModality = () => {
        return this.modality
    }

    public getAthlete = () => {
        return this.athlete
    }

    public getValue = () => {
        return this.value
    }

}

export interface IAddResultInputDTO {
    competition: string,
    modality: MODALITY,
    athlete: string,
    value: number
}

export interface IGetRankingInputDTO {
    competition: string,
    modality: MODALITY
}

export interface IGetRankingRanking {
    position: number,
    athlete: string,
    value: number
}
export interface IGetRankingOutputDTO {
    ranking: IGetRankingRanking[]
}