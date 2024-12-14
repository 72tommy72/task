import joi from 'joi'

export const isValid = (schema) => {
    return (req, res, next) => {
        //data 
        const copyReq = {...req.body, ...req.params, ...req.query };

        //validate data against schema
        const validationResult = schema.validate(copyReq, { abortEarly: false });
        if (validationResult.error) {
            const message = validationResult.error.details.map((element) => element.message)
            return next(new Error("message : " + message, { cause: 400 }));
        }
        return next()
    }
}