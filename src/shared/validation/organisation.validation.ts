import Joi from "joi";

export const orgValidationSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().optional().allow(null, '')
 })
