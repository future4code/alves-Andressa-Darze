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
}

export default ProductController