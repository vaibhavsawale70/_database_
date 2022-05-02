const userDB = require('./user.DB.connection');

const ClientKeyModel = userDB.model('client_key', require('../../models/user/clientKey.schema'));

console.log(ClientKeyModel);

module.exports = ClientKeyModel;
