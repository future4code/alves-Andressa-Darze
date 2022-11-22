import { Router } from 'express'
import PostBusiness from '../business/PostBusiness'
import PostController from '../controller/PostController'
import PostDatabase from '../data/PostDatabase'
import { Authenticator } from '../services/Authenticator'
import IdGenerator from '../services/IdGenerator'

export const postRouter = Router()

const postController = new PostController(
    new PostBusiness(
        new PostDatabase(),
        new IdGenerator(),
        new Authenticator()
    )
)

postRouter.post("/", postController.addPost)
postRouter.get("/", postController.getAllPosts)
postRouter.delete("/:id", postController.deletePost)
postRouter.post("/like/:postId", postController.likePost)
postRouter.delete("/like/:postId", postController.dislikePost)