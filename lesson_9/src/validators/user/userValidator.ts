import * as Joi from 'joi';

import { regex } from '../../constans/regex';

export const userValidator = {
    createUser: Joi.object({
        firstName: Joi
            .string()
            .min(3)
            .max(25)
            .required(),
        lastName: Joi
            .string()
            .min(3)
            .max(25)
            .required(),
        age: Joi
            .number()
            .min(18)
            .max(90)
            .required(),
        phone: Joi
            .string()
            .regex(regex.phone),
        email: Joi
            .string()
            .regex(regex.email)
            .required(),
        password: Joi
            .string()
            .regex(regex.password)
            .required(),

    }),
};
