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

// @ts-ignore
router.use('*', (err, req, res, next) => {
    console.log('____________________________');
    console.log(err.message);
    console.log('____________________________');

    res.status(err.status || 500)
        .json({
            message: err.message,
            data: err.data,
        });
});

export const apiRouter = router;
