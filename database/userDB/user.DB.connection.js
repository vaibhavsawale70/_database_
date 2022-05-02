const mongoose = require('mongoose');

const DB = require('../../config/db.config.json');

const userDB = mongoose.createConnection(
  `mongodb://${DB.USER_DB.DB_USER}:${DB.USER_DB.DB_PASSWORD}@3.110.182.254:27017/users`,
  { maxPoolSize: 10 },
);
// console.log(userDB);
// mongoose.set('debug', true);
//

module.exports = userDB;

// db.updateUser( "xuritiUser",
//   { roles : [
//     { role : "restore", db : "users"  },
//     { role : "backup", db : "users"  }
//   ] } )
