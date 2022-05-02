const mongooose = require('mongoose');

const { Schema } = mongooose;

const linkSchema = new Schema(
  {
    userid: { type: String },
    companyid: { type: String },
    createdat: { type: Date.now() },
  },
  { timestamps: true },
);
linkSchema.pre('updateOne', async function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = linkSchema;
