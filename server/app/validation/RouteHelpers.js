const Joi = require('joi')

module.exports = {
    validateParam: (schema, name) => {
        return (req, res, next) => {
            const validation = schema.validate(req.body);
            if (validation.error) {
                return res.status(400).json(validation.error)
            } else {
                if (!req.value) { req.value = {} }
                if (!req.value['params']) { req.value['params'] = {} }
                req.value['params'][name] = validation.value.param
                next()
            }
        }
    },
    schemas: {
        idSchema: Joi.object().keys({
            param: Joi.string().regex(/^[0-9a-fA-F]{24}$/).required()
        })
    }
}