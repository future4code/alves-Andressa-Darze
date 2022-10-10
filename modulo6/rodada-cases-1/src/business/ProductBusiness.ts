import ProductDatabase from "../database/ProductDatabase";
import { IInputDBDTO, IProductDB, IProductsInputDTO, ITagProductDB, Product } from "../entities/Product";
import IdGenerator from "../services/IdGenerator";

class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}

    public insertData = async (input: IProductsInputDTO[]) => {
        const products = input.map(product => {
            return new Product(
                String(product.id),
                product.name,
                product.tags
            )
        })

        let productsDB : IProductDB[] = []
        let tagsDB : ITagProductDB[] = []

        for(let product of products) {

            const productDB :IProductDB = {
                id: product.getId(),
                name: product.getName()
            }
            productsDB.push(productDB)

            const tags = product.getTags()
            const productId = product.getId()

            for(let tag of tags) {
                const tagOfProduct : ITagProductDB = {
                    product_id: productId,
                    tag
                }

                tagsDB.push(tagOfProduct)
            }
        }

        const inputDB : IInputDBDTO= {
            products: productsDB,
            tags: tagsDB
        }

        await this.productDatabase.insertData(inputDB)

        const response = {
            message: "Dados dos produtos inseridos com sucesso!"
        }

        return response

    }

    public searchById = async(id: string) => {

        const productDB = await this.productDatabase.searchById(id)

        return productDB
    }

    public searchByName = async(name: string) => {

        const productsDB = await this.productDatabase.searchByName(name)
        
        const products = productsDB.map(product => {
            const newProduct = new Product(
                product.id,
                product.name,
                []
            )

            const productResponse : IProductDB = {
                id: newProduct.getId(),
                name: newProduct.getName()
            }

            return productResponse
        })

        return products
    }
}

export default ProductBusiness