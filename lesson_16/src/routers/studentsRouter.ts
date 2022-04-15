import { NextFunction, Router } from 'express';

import { studentModel } from '../models/students';

const router = Router();

router.post('/', async (req, res, next:NextFunction) => {
    try {
        const studentToSave = await studentModel.create(req.body);

        res.json(studentToSave);
    } catch (e: any) {
        next(e);
    }
});

router.get('/', async (_req, res, next:NextFunction) => {
    try {
        const studentsFromDb = await studentModel.find().populate('teacher');

        res.json(studentsFromDb);
    } catch (e: any) {
        next(e);
    }
});

export const studentsRouter = router;
