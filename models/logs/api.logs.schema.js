const mongoose = require('mongoose');

const { Schema } = mongoose;

const apiLogsScham = new Schema(
  {
    service: {
      type: String,
    },
    baseUrl: {
      type: String,
    },
    hostname: {
      type: String,
    },
    ip: {
      type: String,
    },
    method: {
      type: String,
    },
    originalUrl: {
      type: String,
    },
    params: {
      type: Object,
    },
    path: {
      type: String,
    },
    protocol: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { timestamps: true },
);

module.exports = apiLogsScham;
