const {Router} = require('express');

const ExistController = require('../controllers/existController')

//existRouter
const existRouter = Router();

existRouter.get('/', ExistController.renderExist)

module.exports = existRouter;