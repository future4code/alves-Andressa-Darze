export class BaseError extends Error {
    constructor(
        message: string,
        public statusCode: number
    ) {
        super(message)
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

export class IdNotFound extends BaseError {
    constructor(){
        super("Id não encontrado", 401)
    }
}

export class NotAuthorized extends BaseError {
    constructor(){
        super('Ação não autorizada!', 401)
    }
}

export class InvalidDate extends BaseError {
    constructor(){
        super('Formato de data inválido. Favor inserir no padrão AAAA/MM/DD', 404)
    }
}

export class ShowOverbooked extends BaseError {
    constructor(){
        super('Ingressos esgotados! Sentimos muito!', 401)
    }
}
