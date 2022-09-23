import { IPostDB, Post } from "../entities/Post";
import { BaseDatabase } from "./BaseDatabase";

class PostDatabase extends BaseDatabase {
    public static TABLE_POSTS = "Labook_Posts"

    public createPost = async (post: Post) => {
        const postDB: IPostDB = {
            id: post.getId(),
            content: post.getContent(),
            user_id: post.getUserId()
        }
        // likes: post.getLikes()

        await BaseDatabase.connection(PostDatabase.TABLE_POSTS).insert(postDB)
    }
}

export default PostDatabase