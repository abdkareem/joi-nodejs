const Joi = require('joi');

const schema = Joi.object.keys({
    sender: Joi.object.keys({
        accountNo: Joi.number().integer().min(7).max(17).required(),
        routingNo: Joi.number().integer().min(9).max(9).required(),
        userInformation: Joi.object.keys({
            firstName: Joi.string().min(2).max(30).required(),
            lastName: Joi.string().min(2).max(30).required(),
            address: Joi.object.keys({
                firstLine: Joi.string.alphanum().max(30).required(),
                secondLine: Joi.string.alphanum().max(30),
                city: Joi.string().max(20),
                state: Joi.string().min(2).max(2).required(),
                zipCode: Joi.number().integer().min(5).max(6).required()
            }),
            registeredPhoneNo: Joi.number.integer().min(10).max(10).required()
        })
    }),
    recipient: Joi.object.keys({
        accountNo: Joi.number().integer().min(7).max(17).required(),
        routingNo: Joi.number().integer().min(9).max(9).required(),
        userInformation: Joi.object.keys({
            firstName: Joi.string().min(2).max(30).required(),
            lastName: Joi.string().min(2).max(30).required(),
            address: Joi.object.keys({
                firstLine: Joi.string.alphanum().max(30).required(),
                secondLine: Joi.string.alphanum().max(30),
                city: Joi.string().max(20),
                state: Joi.string().min(2).max(2).required(),
                zipCode: Joi.number().integer().min(5).max(6).required()
            }),
            registeredPhoneNo: Joi.number.integer().min(10).max(10).required()
        })
    })
});
