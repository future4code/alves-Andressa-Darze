import { IPostDB, Post } from "../entities/Post";
import { ILikeByUserIdDB, ILikeDB, ILikeDBDTO } from "../entities/Like";
import { BaseDatabase } from "./BaseDatabase";

class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"
    public static TABLE_LIKES = "Labook_Likes"

    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
        }

        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }

    public getAllPosts = async () : Promise<IPostDB[]>=> {
        const postsDB : IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()
        
        return postsDB
    }

    public getLikes = async (postId: string) : Promise<number> => {
        const result: any = await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .select()
        .count("id AS likes")
        .where({ post_id: postId })

        return result[0].likes as number
    }

    public findById = async (id: string) : Promise<IPostDB | undefined> => {
        const postDB : IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()
        .where({id})

        return postDB[0]
    }

    public deletePost = async (id: string) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .delete()
        .where({id})
    }

    public likePost = async (like: ILikeDBDTO) => {
        const likeDB : ILikeDB = {
            id: like.id,
            post_id: like.post_id,
            user_id: like.user_id
        }

        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .insert(likeDB)
    }

    public verifyLike = async (postId: string, userId: string) : Promise<ILikeByUserIdDB | undefined> => {
        const likesDB : ILikeByUserIdDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .select('id')
        .where({post_id: postId, user_id: userId})
        
        return likesDB[0]
    }

    public dislikePost = async (postId: string, userId: string) => {
        await BaseDatabase
        .connection(PostDatabase.TABLE_LIKES)
        .delete()
        .where({ post_id: postId })
        .andWhere({ user_id: userId })
    }
}

export default PostDatabase