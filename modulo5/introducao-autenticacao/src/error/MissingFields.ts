import BaseError from "./BaseError"

export class MissingFields extends BaseError {
    constructor(){
        super("Todas as informações devem ser inseridas", 404)
    }
}