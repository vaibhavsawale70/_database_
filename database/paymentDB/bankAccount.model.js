const paymentDB = require('./payment.DB.connection');
const BankAccountModel = paymentDB.model('bank', require('../../models/payments/bankaccount.schema'));

console.log(BankAccountModel);
module.exports = BankAccountModel;
