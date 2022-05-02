const invoiceDB = require('./invoice.DB.connection');

const InvoiceModel = invoiceDB.model('invoice', require('../../models/invoice/invoice.schema'));

console.log(InvoiceModel);

module.exports = InvoiceModel;
