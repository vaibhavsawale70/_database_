const mongooose = require('mongoose');

const { Schema } = mongooose;

const invoiceSchema = new Schema(
  {
    invoice_number: {
      type: Number,
      default: Number,
    },
    seller: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: null,
    },
    buyer: {
      type: Schema.Types.ObjectId,
      ref: 'user',
      default: null,
    },
    invoice_date: {
      type: String,
    },
    invoice_due_date: {
      type: String,
    },
    extended_due_date: {
      type: String,
      default: '',
    },
    invoice_amount: {
      type: Number,
      default: 0,
      validate: {
        validator(v) {
          return Number.isInteger(v);
        },
        message: (props) => `${props.value} is not valid amount`,
      },
    },
    outstanding_amount: {
      type: Number,
      default: 0,
      validate: {
        validator(v) {
          return Number.isInteger(v);
        },
        message: (props) => `${props.value} is not valid amount`,
      },
    },
    itemized_data: [String],
    invoice_status: {
      type: String,
      default: 'Draft',
    },
    extra_credit_flag: {
      type: String,
      default: false,
    },
    invoice_file: {
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
    comment: {
      type: String,
    },
  },
  // { timestamps: true },
);

// eslint-disable-next-line func-names
invoiceSchema.pre('updateOne', async function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = invoiceSchema;
