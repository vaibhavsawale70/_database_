const paymentlinkDB = require('./paymentlink');

const paymentModel = paymentlinkDB.model('paymentlink', require('../../models/invoice/paymentlink.schema'));

console.log(paymentModel);

module.exports = paymentModel;