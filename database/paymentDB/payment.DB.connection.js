const mongoose = require('mongoose');

const DB = require('../../config/db.config.json');

const paymentDB = mongoose.createConnection(
  `mongodb://${DB.PAYMENT_DB.DB_USER}:${DB.PAYMENT_DB.DB_PASSWORD}@3.110.182.254:27017/payment`,
  { maxPoolSize: 10 },
);
// mongoose.set('debug', true);
// console.log(paymentDB);
module.exports = paymentDB;
