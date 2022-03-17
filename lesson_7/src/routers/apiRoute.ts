import { Router } from 'express';

import { authRouter } from './authRouter';
import { postRouter } from './postRouter';
import { commentRouter } from './commentRouter';
import { userRouter } from './userRouter';

const router = Router();

router.use('/auth', authRouter);
router.use('/users', userRouter);
router.use('/posts', postRouter);
router.use('/comments', commentRouter);

export const apiRouter = router;
