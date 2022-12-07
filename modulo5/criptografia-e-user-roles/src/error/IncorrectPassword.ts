import BaseError from "./BaseError"

export class InvalidCredential extends BaseError {
    constructor(){
        super("As credenciais estão incorretas", 401)
    }
}