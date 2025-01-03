import Joi from "joi";

export const registerSchema = Joi.object({
    userName: Joi.string().min(3).max(30).required(),
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .required(),
    confirmPassword: Joi.string().valid(Joi.ref("password")).required(),
    grade:Joi.string().required()
}).required();

export const loginSchema = Joi.object({
    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")).required(),
    email: Joi.string()
        .email({
            minDomainSegments: 2,
            tlds: { allow: ["com", "net"] },
        })
        .required(),
}).required();
