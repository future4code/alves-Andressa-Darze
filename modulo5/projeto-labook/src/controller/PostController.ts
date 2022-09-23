import { Request, Response } from "express"
import PostBusiness from "../business/PostBusiness";
import { IAddPostInputDTO } from "../entities/Post";

class PostController {
    constructor(
        private postBusiness: PostBusiness
    ) {}

    public addPost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const content = req.body.content

            const input : IAddPostInputDTO = {
                token,
                content
            }

            const response = await this.postBusiness.addPost(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
}

export default PostController