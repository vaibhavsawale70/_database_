const mongoose = require('mongoose');

const DB = require('../../config/db.config.json');

const invoiceDB = mongoose.createConnection(
  `mongodb://${DB.INVOICE_DB.DB_USER}:${DB.INVOICE_DB.DB_PASSWORD}@3.110.182.254:27017/invoice`,
  { maxPoolSize: 10 },
);
console.log('current mongodb version:', mongoose.version);
console.log('mongodb connection id', invoiceDB.id);
// mongoose.set('debug', async (coll, method, query, doc) => {
//   console.log(
//     'mongodb called:',
//     coll,
//     'with method:',
//     method,
//     'with query:',
//     query,
//     'and docs:',
//     doc,
//   );
// });
module.exports = invoiceDB;

// db.createUser(
//   {
//     user: "xuritiEntity",
//     pwd:  passwordPrompt(),
//     roles: [ { role: "readWrite", db: "entity" } ]
//   }
// )
// xuriti@entity@123@098
