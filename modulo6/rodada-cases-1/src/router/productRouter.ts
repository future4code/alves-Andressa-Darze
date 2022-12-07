import { Router } from "express"
import ProductBusiness from "../business/ProductBusiness"
import ProductController from "../controller/ProductController"
import ProductDatabase from "../database/ProductDatabase"
import IdGenerator from "../services/IdGenerator"

export const productRouter = Router()

const productController = new ProductController(
    new ProductBusiness(
        new ProductDatabase(),
        new IdGenerator()
    )
)

productRouter.post("/", productController.insertData)
productRouter.get("/id", productController.searchById)
productRouter.get("/name", productController.searchByName)
productRouter.get("/tag", productController.searchByCategory)