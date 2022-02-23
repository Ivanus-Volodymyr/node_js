const {Router} = require('express');

const LoginController = require('../controllers/loginController');
const isUserValidMiddleware = require('../middlewares/isUserValid');
const IsEmailExistMiddleware = require('../middlewares/isEmailExist');

//loginRouter
const loginRouter = Router();

loginRouter.get('/', LoginController.renderLogin);
loginRouter.post('/', isUserValidMiddleware, IsEmailExistMiddleware, LoginController.renderLoginSome);

module.exports = loginRouter;
