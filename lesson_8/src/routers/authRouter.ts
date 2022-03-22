import { Router } from 'express';

import { authController } from '../controllers/authController';
import { authMiddleware, userMiddleware } from '../middlewares';

const route = Router();

route.post('/registration', authController.registration);
route.post('/login', userMiddleware.isUserExistInDB, authController.login);
route.post('/logout', authMiddleware.checkAccessToken, authController.logout);

export const authRouter = route;
