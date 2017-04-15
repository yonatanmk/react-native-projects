const twilio = require('twilio');
const twilioAuthCodes = require('../env');

const accountSid = twilioAuthCodes.accountSid;
const authToken = twilioAuthCodes.authToken;

module.exports = new twilio.Twilio(accountSid, authToken);
