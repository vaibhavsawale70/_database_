const mongoose = require('mongoose');

const { Schema } = mongoose;

const bankAccountSchema = new Schema(
  {
    bank_name: {
      type: String,
      required: [true, 'Bank Name is Required'],
    },
    account_no: {
      type: Number,
      required: [true, 'Bank Account Number is Required'],
      // unique: true,
      // sparse: true,
    },
    acc_holder: {
      type: String,
      required: [true, 'Account Holder Name is Required'],
    },
    branch_name: {
      type: String,
      required: [true, 'Branch Name is required'],
    },
    ifsc_code: {
      type: String,
      required: [true, 'IFSC code is required'],
    },
    defaultFlag: {
      type: Boolean,
      default: false,
    },
    companyid: {
      type: Schema.Types.ObjectId,
      required: [true, 'Company ID Required'],
    },
    account_type: {
      type: String,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
  },
  // { timestamps: true },
);

/**
 * mongoose custom middleware
 */
bankAccountSchema.pre('updateOne', async function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = bankAccountSchema;
