const logsDB = require('./logs.DB.connection');

const ApiLogsModel = logsDB.model('api_logs', require('../../models/logs/api.logs.schema'));

console.log(ApiLogsModel);

module.exports = ApiLogsModel;