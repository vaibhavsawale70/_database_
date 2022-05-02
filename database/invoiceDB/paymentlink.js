const mongoose = require('mongoose');

const DB = require('../../../../payment-service/_xuriti_database_/config/db.config.json');

const paymentlinkDB = mongoose.createConnection(
  `mongodb://${DB.paymentlink_DB.DB_USER}:${DB.paymentlink_DB.DB_PASSWORD}@3.110.182.254:27017/invoice`,
  { maxPoolSize: 10 },
);
console.log(paymentlinkDB);
module.exports = paymentlinkDB;
