import { Request, Response } from "express"
import PostBusiness from "../business/PostBusiness";
import { ILikeInputDTO } from "../entities/Like";
import { IAddPostInputDTO, IDeletePostInputDTO, IGetPostsInputDTO } from "../entities/Post";

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

    public getAllPosts = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string

            const input : IGetPostsInputDTO = {
                token
            }

            const response = await this.postBusiness.getAllPosts(input)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public deletePost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const idToDelete = req.params.id
    
            const input : IDeletePostInputDTO = {
                token,
                idToDelete
            }
    
            const response = await this.postBusiness.deletePost(input)
    
            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }

    }

    public likePost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const postId = req.params.postId
    
            const input : ILikeInputDTO = {
                token,
                postId
            }
    
            const response = await this.postBusiness.likePost(input)
    
            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public dislikePost = async (req: Request, res: Response) => {
        try {
            const token = req.headers.authorization as string
            const postId = req.params.postId
    
            const input : ILikeInputDTO = {
                token,
                postId
            }
    
            const response = await this.postBusiness.dislikePost(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
}

export default PostController