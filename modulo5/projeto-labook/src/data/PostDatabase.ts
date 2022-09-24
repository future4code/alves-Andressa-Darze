import { IPostDB, Post } from "../entities/Post";
import { BaseDatabase } from "./BaseDatabase";

class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"

    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId(),
        }
        // likes: post.getLikes()

        await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .insert(postDB)
    }

    public getAllPosts = async () => {
        const postsDB : IPostDB[] = await BaseDatabase
        .connection(PostDatabase.TABLE_POSTS)
        .select()
        
        return postsDB
    }

    public findById = async (id: string) => {
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
}

export default PostDatabase