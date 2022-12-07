export interface ILikeDB {
    id: string,
    post_id: string,
    user_id: string
}

export interface ILikeDBDTO {
    id: string,
    post_id: string,
    user_id: string
}

export interface ILikeInputDTO {
    token: string,
    postId: string
}

export interface ILikeByUserIdDB {
    userId: string
}