import PostDatabase from "../data/PostDatabase";
import IdGenerator from "../services/IdGenerator"
import  {Authenticator, ITokenPayload } from "../services/Authenticator"
import { IAddPostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO, IGetPostsOutputDTO, IGetPostsPost, Post } from "../entities/Post";
import { dislikeNotAuthorized, IdNotFound, InvalidContent, InvalidToken, LikeNotAuthorized, MissingFields, NotAuthorized } from "../error/error";
import { USER_ROLES } from "../entities/User";
import { ILikeDB, ILikeInputDTO } from "../entities/Like";

class PostBusiness {
    constructor(
        private postDatabase: PostDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ) {}

    public addPost = async (input: IAddPostInputDTO) => {
        const { token, content } = input

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        if(!content) {
            throw new MissingFields()
        }

        if(content.length < 1) {
            throw new InvalidContent()
        }

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            content,
            payload.id
            // 0
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso!"
        }

        return response
    }

    public getAllPosts = async (input: IGetPostsInputDTO) => {
        const token = input.token

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        const postsDB = await this.postDatabase.getAllPosts()

        const posts = postsDB.map(postDB => {
            return new Post(
                postDB.id,
                postDB.content,
                postDB.user_id
            )
        })

        for(let post of posts) {
            const postId = post.getId()
            const likes = await this.postDatabase.getLikes(postId)
            post.setLikes(likes)
        }
        
        const response : IGetPostsOutputDTO = {
            posts
        }

        return response
    }

    public deletePost = async( input: IDeletePostInputDTO) => {
        const { token, idToDelete } = input

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        const postDB = await this.postDatabase.findById(idToDelete)

        if(!postDB) {
            throw new IdNotFound()
        }

        const post = new Post(
            postDB.id,
            postDB.content,
            postDB.user_id
        )

        if(payload.role === USER_ROLES.NORMAL && payload.id !== post.getUserId()) {
            throw new NotAuthorized()
        }

        await this.postDatabase.deletePost(idToDelete)

        const response= {
            message: "Post deletado com sucesso!"
        }

        return response

    }

    public likePost = async (input: ILikeInputDTO) => {
        const { token, postId } = input

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        const userId = payload.id

        const postDB = await this.postDatabase.findById(postId)

        if(!postDB) {
            throw new IdNotFound()
        }

        const verifyLike = await this.postDatabase.verifyLike(postId, userId)

        if(verifyLike){
            throw new LikeNotAuthorized()
        }

        const id = this.idGenerator.generate()

        const like : ILikeDB = {
            id,
            post_id: postId,
            user_id: userId
        }

        await this.postDatabase.likePost(like)

        const response = {
            message: "Like dado com sucesso!"
        }

        return response
    }

    public dislikePost = async (input: ILikeInputDTO) => {
        const { token, postId } = input

        const payload = this.authenticator.verifyToken(token)

        if(!payload) {
            throw new InvalidToken()
        }

        const userId = payload.id

        const postDB = await this.postDatabase.findById(postId)

        if(!postDB) {
            throw new IdNotFound()
        }

        const verifyLike = await this.postDatabase.verifyLike(postId, userId)

        if(!verifyLike){
            throw new dislikeNotAuthorized()
        }

        await this.postDatabase.dislikePost(postId, userId)

        const response = {
            message: "Dislike efetuado com sucesso!"
        }

        return response
    }

}

export default PostBusiness