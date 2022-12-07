export interface IPostDB {
    id: string,
    content: string,
    user_id: string,
}


export class Post {
    constructor(
        private id: string,
        private content: string,
        private userId: string,
        private likes: number = 0
    ) {}

    // public static mapPostsToFront = (postsDB: IPostDB[]) => {
    //     return postsDB.map(postDB => {
    //         const post = new Post(
    //             postDB.id,
    //             postDB.content,
    //             postDB.user_id
    //         )

    //         const postResponse: IGetPostsPost = {
    //             id: post.getId(),
    //             content: post.getContent(),
    //             userId: post.getUserId(),
    //             likes: post.getLikes()
    //         }

    //         return postResponse
    //     })
    // }

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

    public setLikes = (newLikes: number) => {
        this.likes = newLikes
    }
}

export interface IAddPostInputDTO {
    token: string,
    content: string
}

export interface IGetPostsInputDTO {
    token: string
}

export interface IGetPostsPost {
    id: string,
    content: string,
    userId: string,
    likes: number
}

export interface IGetPostsOutputDTO {
    posts: Post[]
}

export interface IDeletePostInputDTO {
    token: string,
    idToDelete: string
}