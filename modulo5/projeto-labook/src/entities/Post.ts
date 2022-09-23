export interface IPostDB {
    id: string,
    content: string,
    user_id: string
}

export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number
    ) {}

    public getId = () => {
        return this.id
    }

    public getContent = () => {
        return this.content
    }

    public getUserId = () => {
        return this.userId
    }

    public getLikes = () => {
        return this.likes
    }
}

export interface IAddPostInputDTO {
    token: string,
    content: string
}