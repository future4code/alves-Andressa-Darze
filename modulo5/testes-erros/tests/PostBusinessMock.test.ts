import PostBusiness from "../src/business/PostBusiness"
import { IAddPostInputDTO, IGetPostsInputDTO, IGetPostsOutputDTO, Post } from "../src/entities/Post"
import { AuthenticatorMock } from "./mocks/AuthenticatorMock"
import { IdGeneratorMock } from "./mocks/IdGeneratorMock"
import { PostDatabaseMock } from "./mocks/PostDatabaseMock"

describe("Testando a PostBusiness", () => {
    const postBusiness = new PostBusiness(
        new PostDatabaseMock(),
        new IdGeneratorMock(),
        new AuthenticatorMock()
    )

    test("Criação de post deve retornar uma mensagem de sucesso", async () => {
        const input : IAddPostInputDTO = {
            token: "token-mock-normal",
            content: "mock-content"
        }

        const response = await postBusiness.addPost(input)

        expect(response.message).toBe("Post criado com sucesso!")
    })

    test("GetAllPosts deve retornar um array com 3 elementos de instância Post", async () => {
        const input : IGetPostsInputDTO = {
            token: "token-mock-normal"
        }

        const response : IGetPostsOutputDTO = await postBusiness.getAllPosts(input)

        expect(response.posts.length).toBe(3)
        expect(response.posts[0]).toBeInstanceOf(Post)
    })
})