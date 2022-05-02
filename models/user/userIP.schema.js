const mongoose = require('mongoose');

const { Schema } = mongoose;

const blockedIPSchema = new Schema({
  ip: {
    type: String,
    unique: true,
  },
  user: {
    type: String,
  },
  status: {
    type: String, // Blocked, Allowed
  },
  createdAt: {
    type: Date,
    default: Date,
  },
  updatedAt: {
    type: Date,
    default: Date,
  },
  expiry: {
    type: Date,
  },
});

module.exports = blockedIPSchema;
