const mongoose = require('mongoose');

const { Schema } = mongoose;

// extend credit module

const creditExtendSchema = new Schema({
  invoice_id: { type: String, required: true },
  invoice_no: { type: String },
  buyer_id: { type: String }, //  company id in  mongodb

  seller_id: { type: String },
  seller_name: { type: String },
  due_date: { type: String },
  new_due_date: { type: String },

  invoice_amount: { type: Number },
  outstanding_amount: { type: Number },
  interest_amount: { type: Number },
  createdAt: {
    type: Date,
  },
  updated_at: { type: String, default: Date },
  updated_by: { type: String },
  subREFID: { type: Number },
  payment_Id: { type: String, default: 'NA' },
  subscriptionId: { type: String, default: 'NA' },
  days: { type: Number },
  status: { type: String, default: 'Pending' },
  comment: { type: String, default: 'NA' },
  transaction_date: { type: Date },
});

module.exports = creditExtendSchema;
