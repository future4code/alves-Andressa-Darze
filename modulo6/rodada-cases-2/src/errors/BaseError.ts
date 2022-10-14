export class BaseError extends Error {
    constructor(
        message: string,
        public statusCode: number
    ) {
        super(message)
    }
}

export class MissingFields extends BaseError {
    constructor(){
        super("Informações devem ser passadas!", 404)
    }
}