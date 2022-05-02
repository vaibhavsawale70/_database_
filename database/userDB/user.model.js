const userDB = require('./user.DB.connection');

const UserModel = userDB.model('user', require('../../models/user/user.schema'));

console.log(UserModel);

module.exports = UserModel;
