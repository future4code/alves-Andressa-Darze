import ProductDatabase from "../database/ProductDatabase";
import IdGenerator from "../services/IdGenerator";

class ProductBusiness {
    constructor(
        private productDatabase: ProductDatabase,
        private idGenerator: IdGenerator
    ) {}
}

export default ProductBusiness