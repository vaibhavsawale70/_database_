const mongoose = require('mongoose');

const { Schema } = mongoose;

const paymentSchema = new Schema(
  {
    invoice: {
      type: Schema.Types.ObjectId,
      ref: 'invoice',
    },
    interest: {
      type: Number,
      required: [true, 'Interest is required'],
    },
    customer_details: {
      customer_id: {
        type: String,
      },
      customer_name: {
        type: String,
      },
      customer_email: {
        type: String,
      },
      customer_phone: {
        type: String,
      },
    },
    order_meta: {
      return_url: {
        type: String,
        default: '',
      },
    },
    cf_order_id: {
      type: String,
    },
    order_id: {
      type: String,
    },
    order_status: {
      type: String,
      default: 'PENDING',
    },
    order_token: {
      type: String,
    },
    order_note: {
      type: String,
      default: '',
    },
    payment_link: {
      type: String,
    },
    order_tags: {
      type: String,
    },
    order_splits: [],
    settlements: {
      url: {
        type: String,
        default: '',
      },
    },
    payments: {
      url: {
        type: String,
        default: '',
      },
    },
    refunds: {
      url: {
        type: String,
        default: '',
      },
    },
    order_expiry_time: {
      type: Date,
    },
    order_amount: {
      type: String,
    },
    order_currency: {
      type: String,
    },
    buyer: {
      type: String,
      required: [true, 'Buyer ID is required'],
    },
    outstanding_amount: {
      type: Number,
      default: 0,
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

module.exports = paymentSchema;
