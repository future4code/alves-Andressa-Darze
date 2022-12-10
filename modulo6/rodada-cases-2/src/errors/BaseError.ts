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
        super("Informações devem ser passadas!", 400)
    }
}

export class NonExistent extends BaseError {
    constructor(){
        super("Esta competição não existe no nosso banco de dados.", 404)
    }
}

export class CompetitionFinished extends BaseError {
    constructor(){
        super("Esta competição já foi encerrada. Não é possível cadastrar novos resultados.", 422)
    }
}
export class SameStatus extends BaseError {
    constructor(){
        super("Este já é o status desta competição", 409)
    }
}

export class AlreadyExists extends BaseError {
    constructor(){
        super("Uma competição com este nome já foi criada nesta modalidade.", 409)
    }
}

export class ResultAlreadyInserted extends BaseError {
    constructor(){
        super("Resultado deste atleta nesta competição já foi computado.", 409)
    }
}

export class LimitReached extends BaseError {
    constructor(){
        super("Já foram inseridos os resultados das 3 tentativas permitidas da competição nesta modalidade.", 409)
    }
}

export class NullRanking extends BaseError {
    constructor(){
        super("Não há cadastros de resultados para esta competição", 404)
    }
}