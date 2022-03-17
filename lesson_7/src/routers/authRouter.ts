import { Router } from 'express';

import { authController } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';

const route = Router();

route.post('/registration', authController.registration);
// route.post('/login', authController.login);

route.post('/logout', authMiddleware.checkAccessToken, authController.logout);

export const authRouter = route;
