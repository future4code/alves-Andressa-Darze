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

export class NonExistent extends BaseError {
    constructor(){
        super("Esta competição não existe no nosso banco de dados.", 404)
    }
}

export class CompetitionFinished extends BaseError {
    constructor(){
        super("Esta competição já foi encerrada. Não é possível cadastrar novos resultados.", 404)
    }
}

export class AlreadyExists extends BaseError {
    constructor(){
        super("Uma competição com este nome já foi criada nesta modalidade.", 404)
    }
}

export class ResultAlreadyInserted extends BaseError {
    constructor(){
        super("Resultado deste atleta nesta competição já foi computado.", 404)
    }
}

export class LimitReached extends BaseError {
    constructor(){
        super("Já foram inseridos os resultados das 3 tentativas permitidas da competição nesta modalidade.", 404)
    }
}