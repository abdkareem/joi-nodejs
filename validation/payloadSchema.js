const Joi = require('joi');

const payloadSchema = Joi.object().options({abortEarly: false}).keys({
    sender: Joi.object().keys({
        accountNo: Joi.string().required(),
        routingNo: Joi.string().required(),
        userInformation: Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            address: Joi.object().keys({
                firstLine: Joi.string().required(),
                secondLine: Joi.string(),
                city: Joi.string(),
                state: Joi.string().required(),
                zipCode: Joi.string().required()
            }),
            registeredPhoneNo: Joi.string().required()
        })
    }),
    recipient: Joi.object().keys({
        accountNo: Joi.string().required(),
        routingNo: Joi.string().required(),
        userInformation: Joi.object().keys({
            firstName: Joi.string().required(),
            lastName: Joi.string().required(),
            address: Joi.object().keys({
                firstLine: Joi.string().required(),
                secondLine: Joi.string(),
                city: Joi.string(),
                state: Joi.string().required(),
                zipCode: Joi.string().required()
            }),
            registeredPhoneNo: Joi.string().required()
        })
    })
});

module.exports = (event) => {

    Joi.validate(event, payloadSchema, (err, value) => {
        if (err) {
            console.log('****Error encountered ', err);
            return;
        }
        else {
            console.log('****Payload validated ');
        }
    });
};