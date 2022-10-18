import { Router } from 'express'
import ResultBusiness from '../business/ResultBusiness'
import ResultController from '../controller/ResultController'
import CompetitionDatabase from '../database/CompetitionDatabase'
import ResultDatabase from '../database/ResultDatabase'
import { IdGenerator } from '../services/IdGenerator'

export const resultRouter = Router()

const resultController = new ResultController(
    new ResultBusiness(
        new ResultDatabase(),
        new CompetitionDatabase(),
        new IdGenerator()
    )
)

resultRouter.post("/add", resultController.addResult)