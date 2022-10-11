export class BaseError extends Error {
    constructor(
        message: string,
        public statusCode: number
    ) {
        super(message)
    }
}

export class ProductNotFound extends BaseError {
    constructor(){
        super("Não existe um produto cadastrado com essas características", 401)
    }
}

export class MissingFields extends BaseError {
    constructor(){
        super("Informações devem ser passadas!", 404)
    }
}

