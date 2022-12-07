import { IInputDBDTO, IProductDB, IProductIdOutput, Product } from "../entities/Product"
import { BaseDatabase } from "./BaseDatabase"

class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Case1_Products"
    public static TABLE_TAGS_PRODUCTS = "Case1_Tags_Products"

    public insertData = async (input: IInputDBDTO) => {
        const { products, tags } = input

        await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .insert(products)

        await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS_PRODUCTS)
        .insert(tags)
    }

    public searchById = async (id: string) => {
        const productDB : IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where({id})

        return productDB[0]
    }

    public searchByName = async (name: string) => {
        const productsDB : IProductDB[] = await BaseDatabase
        .connection(ProductDatabase.TABLE_PRODUCTS)
        .select()
        .where("name", "LIKE", `%${name}%`)

        return productsDB
    }

    public searchByCategory = async (tag: string) => {
        const productsId : IProductIdOutput  [] = await BaseDatabase
        .connection(ProductDatabase.TABLE_TAGS_PRODUCTS)
        .select("product_id")
        .where({tag})
    
        return productsId
    }

}

export default ProductDatabase