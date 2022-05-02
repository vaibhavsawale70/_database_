const userDB = require('./user.DB.connection');

const OTPModel = userDB.model('otp', require('../../models/user/OTP.schema'));

console.log(OTPModel);

module.exports = OTPModel;
