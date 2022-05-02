const mongoose = require('mongoose');

const { Schema } = mongoose;

const otpSchema = new Schema({
  otp: {
    type: Number,
    min: [4, 'OTP Must Be 4 Digits'],
    required: [true, 'OTP Field Can Not Be Empty'],
    unique: true,
  },
  reason: {
    /**
     * List of reasons :-
     * 1. User-Registration.
     * 2. Forgot-Password.
     */
    type: String,
    required: [true, 'Reason Field Can Not Be Empty'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  mobile_number: {
    type: Number,
  },
  status: {
    type: String,
    default: 'Pending', // Pending, Verified
  },
  expiration_time: {
    type: Date,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
});

module.exports = otpSchema;
