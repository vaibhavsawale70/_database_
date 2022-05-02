const mongoose = require('mongoose');

const { Schema } = mongoose;

const entityRelation = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  company: [
    {
      type: Schema.Types.ObjectId,
      ref: 'entity',
      default: [],
    },
  ],
  createdAt: {
    type: Date,
  },
  userRole: {
    type: String,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = entityRelation;
