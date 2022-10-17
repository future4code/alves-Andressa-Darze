import { Router } from 'express'
import CompetitionBusiness from '../business/CompetitionBusiness'
import CompetitionController from '../controller/CompetitionController'
import CompetitionDatabase from '../database/CompetitionDatabase'
import { IdGenerator } from '../services/IdGenerator'


export const compRouter = Router()

const competitionController = new CompetitionController(
    new CompetitionBusiness(
        new CompetitionDatabase(),
        new IdGenerator()
    )
)

compRouter.post("/add", competitionController.addCompetition)