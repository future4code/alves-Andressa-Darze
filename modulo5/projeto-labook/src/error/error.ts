class BaseError extends Error{
    public statusCode: number

    constructor(message: string, statusCode: number){
        super(message)
        this.statusCode = statusCode
    }
}

export class EmailExists extends BaseError {
    constructor(){
        super("Email já está cadastrado", 401)
    }
}

export class EmailNotFound extends BaseError {
    constructor() {
        super("Email inserido não cadastrado", 401)
    }
}

export class InvalidPassword extends BaseError {
    constructor(){
        super("Senha inválida", 401)
    }
}

export class InvalidEmail extends BaseError {
    constructor(){
        super("Email inválido", 401)
    }
}

export class InvalidName extends BaseError {
    constructor(){
        super("O nome deve ter ao menos 3 caracteres", 401)
    }
}

export class MissingFields extends BaseError {
    constructor(){
        super("Todas as informações devem ser passadas!", 404)
    }
}

export class InvalidToken extends BaseError {
    constructor(){
        super("Token ausente ou inválido", 401)
    }
}

export class InvalidContent extends BaseError {
    constructor(){
        super("O conteúdo deve ter ao menos 1 caractér", 401)
    }
}

