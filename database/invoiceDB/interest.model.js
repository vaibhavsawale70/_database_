

const interestDB = require('./invoice.DB.connection');

const InterestModel = interestDB.model('interest', require('../../models/invoice/interest.schema'));

console.log(InterestModel);

module.exports =InterestModel;
