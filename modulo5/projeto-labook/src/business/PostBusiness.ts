import PostDatabase from "../data/PostDatabase";
import IdGenerator from "../services/IdGenerator"
import  {Authenticator, ITokenPayload } from "../services/Authenticator"
import { IAddPostInputDTO, Post } from "../entities/Post";
import { InvalidContent, InvalidToken, MissingFields } from "../error/error";

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
            throw new InvalidToken
        }

        if(!content) {
            throw new MissingFields
        }

        if(content.length < 1) {
            throw new InvalidContent
        }

        const id = this.idGenerator.generate()

        const post = new Post(
            id,
            content,
            payload.id,
            0
        )

        await this.postDatabase.createPost(post)

        const response = {
            message: "Post criado com sucesso!"
        }

        return response
    }
}

export default PostBusiness