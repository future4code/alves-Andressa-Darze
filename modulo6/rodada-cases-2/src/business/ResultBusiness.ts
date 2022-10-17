import ResultDatabase from "../database/ResultDatabase";
import { IdGenerator } from "../services/IdGenerator";

class ResultBusiness {
    constructor(
        private resultDatabase: ResultDatabase,
        private idGenerator: IdGenerator
    ) {}
}

export default ResultBusiness