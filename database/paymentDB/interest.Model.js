

const interestDB = require('./payment.DB.connection')
const interst_Model = interestDB.model('interest_calculate',require('../../models/interest/interest_cal.schema'))
console.log(interst_Model)
module.exports = interst_Model
