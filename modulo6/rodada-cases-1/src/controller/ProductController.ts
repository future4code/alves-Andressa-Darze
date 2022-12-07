import ProductBusiness from "../business/ProductBusiness";
import { Request, Response } from "express"
import { IProductsInputDTO } from "../entities/Product";

class ProductController {
    constructor(
        private productBusiness: ProductBusiness
    ) {}

    public insertData = async (req: Request, res: Response) => {
        try {
            const input : IProductsInputDTO[] = req.body.products

            const response = await this.productBusiness.insertData(input)

            res.status(201).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public searchById = async (req: Request, res: Response) => {
        try {
            const id = req.query.id as string

            const response = await this.productBusiness.searchById(id)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public searchByName = async (req: Request, res: Response) => {
        try {
            const name = req.query.name as string || ""

            const response = await this.productBusiness.searchByName(name)

            res.status(200).send(response)

        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }

    public searchByCategory = async (req: Request, res: Response) => {
        try {
            const tag = req.query.tag as string || ""
            const response = await this.productBusiness.searchByCategory(tag)
            res.status(200).send(response)
        } catch (error: any) {
            res.status(400).send({ message: error.message })
        }
    }
}

export default ProductController