const mongoose = require('mongoose');

const DB = require('../../config/db.config.json');

const entityDB = mongoose.createConnection(
  `mongodb://${DB.ENTITY_DB.DB_USER}:${DB.ENTITY_DB.DB_PASSWORD}@3.110.182.254:27017/entity`,
  { maxPoolSize: 10 },
);
// mongoose.set('debug', true);
mongoose.set('debug', async (coll, method, query, doc) => {
  console.log(
    'mongodb called:',
    coll,
    'with method:',
    method,
    'with query:',
    query,
    'and docs:',
    doc,
  );
});
// console.log(entityDB);
module.exports = entityDB;
