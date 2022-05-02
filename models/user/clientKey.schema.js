const mongoose = require('mongoose');

const { Schema } = mongoose;

const keySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  userId: {
    type: String,
    default: '',
  },
  key: {
    type: String,
    default: '',
  },
  createdAt: {
    type: Date,
    default: Date,
  },
  updatedAt: {
    type: Date,
    default: Date,
  },
});

module.exports = keySchema;
