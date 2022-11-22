import { BaseDatabase } from "../../src/data/BaseDatabase";
import { ILikeByUserIdDB, ILikeDBDTO } from "../../src/entities/Like";
import { Post, IPostDB } from "../../src/entities/Post"

export class PostDatabaseMock extends BaseDatabase {
    public createPost = async (post: Post) : Promise<void> => {}

    public getAllPosts = async () : Promise<IPostDB[]> => {
        const postsDB: IPostDB[] = [
            {
                id: "201",
                content: "Olá, sou novo por aqui!",
                user_id: "101"
            },
            {
                id: "202",
                content: "Bom dia, família!",
                user_id: "102"
            },
            {
                id: "203",
                content: "Receba!",
                user_id: "103"
            }
        ]

        return postsDB
    }

    public getLikes = async (postId: string) : Promise<number> => {
        if(postId == "201") return 1

        return 0
    }

    public findById = async (postId: string) : Promise<IPostDB | undefined> => {

        switch(postId) {
            case "201":
                return {
                    id: "201",
                    content: "Olá, sou novo por aqui!",
                    user_id: "101"
                }

            default:
                return undefined
        }
    }

    public deletePost = async (postId: string) : Promise<void> => {}

    public likePost = async (like: ILikeDBDTO) : Promise<void> => {}

    public dislikePost = async (postId: string, userId: string) : Promise<void> => {}

    public verifyLike = async (postId: string, userId: string) : Promise<ILikeByUserIdDB[] | undefined> => {
        if (postId == "201" && userId == "id-mock") {
            return [{
                userId: "id-mock"
            }]
        }

        return undefined
    }
}