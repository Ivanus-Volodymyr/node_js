const {Router} = require('express');

const SingInController = require('../controllers/singInController')

//signInRouter
const signInRouter = Router();

signInRouter.get('/', SingInController.singInRender);
signInRouter.post('/', SingInController.singInFind);

module.exports = signInRouter;