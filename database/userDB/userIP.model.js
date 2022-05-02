const userDB = require('./user.DB.connection');

const UserIPMOdel = userDB.model('user_ip', require('../../models/user/userIP.schema'));

console.log(UserIPMOdel);

module.exports = UserIPMOdel;
