import ProductDatabase from "../database/ProductDatabase";
import { IInputDBDTO, IProductDB, IProductsInputDTO, ITagProductDB, Product } from "../entities/Product";
import { MissingFields, ProductNotFound } from "../errors/BaseError";

class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase
    ) {}

    public insertData = async (input: IProductsInputDTO[]) => {

        if(input.length===0) {
            throw new MissingFields()
        }

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

        if(!id) {
            throw new MissingFields()
        }

        const productDB = await this.productDatabase.searchById(id)

        if(!productDB){
            throw new ProductNotFound()
        }

        return productDB
    }

    public searchByName = async(name: string) => {

        const productsDB = await this.productDatabase.searchByName(name)

        if(productsDB.length===0){
            throw new ProductNotFound()
        }
        
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

    public searchByCategory = async (tag: string) => {

        if(!tag) {
            throw new MissingFields()
        }

        const productsIdDB = await this.productDatabase.searchByCategory(tag)

        if(productsIdDB.length===0) {
            throw new ProductNotFound()
        }

       const productsId = productsIdDB.map(product => {
            return product.product_id
        })

        let productsByTag : IProductDB[] = []

        for(let id of productsId) {
            const product = await this.productDatabase.searchById(id) as IProductDB
            productsByTag.push(product)
        }
        return productsByTag
    }
}

export default ProductBusiness