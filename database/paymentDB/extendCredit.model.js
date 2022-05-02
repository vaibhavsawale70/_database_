

const paymentDB = require('./payment.DB.connection')
const Extend_CreditModel = paymentDB.model('extend_credit',require('../../models/payments/extend_credit.schema'))
console.log(Extend_CreditModel)
module.exports = Extend_CreditModel