let event = require('./event.json');
const payloadSchema = require('./validation/payloadSchema');

exports.handler = (event, context, callback) => {
    if (typeof event == "string" || event instanceof String) {
        event = JSON.parse(event);
    }
    payloadSchema(event);
}



