import { NextFunction, Router } from 'express';
import { teacherModel } from '../models/teachers';

const router = Router();

router.post('/', async (req, res, next:NextFunction) => {
    try {
        const teacherToSave = await teacherModel.create(req.body);

        res.json(teacherToSave);
    } catch (e: any) {
        next(e);
    }
});

export const teacherRouter = router;
