import { NextFunction, Response } from 'express';
import { UploadedFile } from 'express-fileupload';

import { IRequestExtended } from '../interfaces';
import { fileConstants } from '../constans';
import { ErrorHandler } from '../error/ErrorHandler';

class FileMiddleware {
    async checkUserAvatar(req:IRequestExtended, _res: Response, next: NextFunction) {
        try {
            if (!req.files?.avatar) {
                next();
                return;
            }
            const { name, size, mimetype } = req.files.avatar as UploadedFile;

            if (size > fileConstants.photos_max_size) {
                next(new ErrorHandler(`file ${name} is to big`));
                return;
            }

            if (!fileConstants.photos_mimetypes.includes(mimetype)) {
                next(new ErrorHandler(`file not of type ${mimetype}`));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}

export const fileMiddleware = new FileMiddleware();
