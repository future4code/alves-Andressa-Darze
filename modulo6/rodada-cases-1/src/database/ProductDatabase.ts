import { IInputDBDTO, IProductDB } from "../entities/Product"
import { BaseDatabase } from "./BaseDatabase"

class ProductDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Case1_Products"
    public static TABLE_TAGS_PRODUCTS = "Case1_Tags_Products"

    public insertData = async (input: IInputDBDTO) => {
        const { products, tags } = input

        await BaseDatabase.connection(ProductDatabase.TABLE_PRODUCTS).insert(products)

        await BaseDatabase.connection(ProductDatabase.TABLE_TAGS_PRODUCTS).insert(tags)
    }

}

export default ProductDatabase