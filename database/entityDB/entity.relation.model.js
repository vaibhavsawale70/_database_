const entityDB = require('./entity.DB.connection');

const EntityRelationModel = entityDB.model('entity_relation', require('../../models/entity/entity.relation.schema'));

console.log(EntityRelationModel);

module.exports = EntityRelationModel;
