import * as Joi from 'joi';

import { regex } from '../../constans';

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
            .max(90),
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
    login: Joi.object({
        email: Joi
            .string()
            .regex(regex.email)
            .required()
            .messages({ 'string.pattern.base': 'email not valid' }),
        password: Joi
            .string()
            .required(),
    }),
    email: Joi.object({
        email: Joi
            .string()
            .regex(regex.email)
            .required()
            .messages({ 'string.pattern.base': 'email not valid' })
            .trim(),
    }),
    password: Joi.object({
        password: Joi
            .string()
            .regex(regex.password)
            .required()
            .messages({ 'string.pattern.base': 'password not valid' })
            .trim(),
    }),
    more: Joi.object({
        more: Joi
            .string()
            .regex(regex.password)
            .required()
            .messages({ 'string.pattern.base': 'password not valid' })
            .trim(),
    }),
};
