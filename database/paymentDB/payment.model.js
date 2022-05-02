const paymentDB = require('./payment.DB.connection');

const PaymentModel = paymentDB.model('payment', require('../../models/payments/payment.schema'));

console.log(PaymentModel);

module.exports = PaymentModel;
