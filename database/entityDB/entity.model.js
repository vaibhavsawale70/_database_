const entityDB = require('./entity.DB.connection');

const EntityModel = entityDB.model('entity', require('../../models/entity/entity.schema'));

console.log(EntityModel);

module.exports = EntityModel;
