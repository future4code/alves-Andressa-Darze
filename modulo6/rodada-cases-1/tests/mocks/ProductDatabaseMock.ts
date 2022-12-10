import { BaseDatabase } from "../../src/database/BaseDatabase"
import { IInputDBDTO, IProductDB, IProductIdOutput } from "../../src/entities/Product"

export class ProductDatabaseMock extends BaseDatabase {
    public static TABLE_PRODUCTS = "Case1_Products"
    public static TABLE_TAGS_PRODUCTS = "Case1_Tags_Products"

    public insertData = async (input: IInputDBDTO) : Promise<void> => {}

    public searchById = async (id: string) : Promise<IProductDB | undefined> => {
        switch (id) {
            case "id-mock-A":
                const productA: IProductDB = {
                    id: "id-mock-A",
                    name: "Name Mock A"
                }
                return productA
            case "id-mock-B":
                const productB: IProductDB ={
                    id: "id-mock-B",
                    name: "Name Mock B"
                }
                return productB
            default:
                return undefined
        }
    }
    
    public searchByName = async (name: string) : Promise<IProductDB[]> => {
        switch (name) {
            case "Mock":
                const products : IProductDB[] = [
                    {
                        id: "id-mock-A",
                        name: "Name Mock A"
                    },
                    {
                        id: "id-mock-B",
                        name: "Name Mock B"
                    }
                ]
                return products
            default:
                return []
        }
    }

    public searchByCategory = async (tag: string) : Promise<IProductIdOutput[]> => {
        switch (tag) {
            case "tag-mock":
                const productsId: IProductIdOutput[] = [
                    {
                        product_id: "id-mock-A"
                    },
                    {
                        product_id: "id-mock-B"
                    }
                ]
                return productsId
            default:
                return []
        }
    }
}