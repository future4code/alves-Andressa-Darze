import BaseError from "./BaseError"

export class EmailExists extends BaseError {
    constructor(){
        super("Email já existe na aplicação", 401)
    }
}

export class EmailInvalid extends BaseError {
    constructor(){
        super("Email inserido é inválido", 401)
    }
}