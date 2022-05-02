const mongoose = require('mongoose');

const DB = require('../../config/db.config.json');

const logsDB = mongoose.createConnection(
  `mongodb://${DB.LOGS_DB.DB_USER}:${DB.LOGS_DB.DB_PASSWORD}@3.110.182.254:27017/logs`,
  { maxPoolSize: 10 },
);

module.exports = logsDB;