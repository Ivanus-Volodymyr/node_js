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
            .string(),
        phone: Joi
            .string()
            .regex(regex.phone),
        email: Joi
            .string()
            .regex(regex.email)
            .required()
            .messages({ 'string.pattern.base': 'email not valid' })
            .trim(),
        password: Joi
            .string()
            .regex(regex.password)
            .required()
            .messages({ 'string.pattern.base': 'password not valid' })
            .trim(),

    }),
    login: Joi.object({
        email: Joi
            .string()
            .regex(regex.email)
            .required()
            .messages({ 'string.pattern.base': 'email not valid' })
            .trim(),
        password: Joi
            .string()
            .required()
            .required()
            .messages({ 'string.pattern.base': 'password not valid' })
            .trim(),
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
