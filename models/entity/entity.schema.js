const mongoose = require('mongoose');

const { Schema } = mongoose;

const entitySchema = new Schema(
  {
    gstin: {
      type: String,
      required: [true, 'Please Enter GST Number'],
      unique: true,
      sparse: true,
    },
    company_name: {
      type: String,
      required: [true, 'Please Enter Company Name'],
    },
    address: {
      type: String,
      required: [true, 'Please Add Address'],
    },
    district: {
      type: String,
      required: [true, 'Please Add District'],
    },
    state: {
      type: String,
      required: [true, 'Please Add State'],
    },
    pincode: {
      type: Number,
      required: [true, 'Please Add Pincode'],
    },
    company_mobile: {
      type: Number,
      required: [true, 'Please Add Company Mobile'],
      unique: true,
      sparse: true,
    },
    company_email: {
      type: String,
      required: [true, 'Please Add Company Email'],
      unique: true,
      sparse: true,
    },
    pan: {
      type: String,
      required: [true, 'Please Add PAN Number'],
      unique: true,
      sparse: true,
    },
    cin: {
      type: String,
      required: [true, 'Please Add CIN Number'],
      unique: true,
      sparse: true,
    },
    tan: {
      type: String,
      required: [true, 'Please Add TAN Number'],
      unique: true,
      sparse: true,
    },
    industry_type: {
      type: String,
      required: [true, 'Please Add Your Industry Type'],
    },
    annual_turnover: {
      type: String,
      required: [true, 'Please Add Your Anual Turnover'],
    },
    status: {
      type: String,
      enum: {
        values: ['Active', 'Inactive'],
        message: '{VALUE} is not supported',
        default: 'Inactive',
      },
    },
    msg: {
      type: String,
    },
    createdBy: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
    },
    interest_rate:{type: String,}
  },
  // { timestamps: true },
);

entitySchema.pre('updateOne', async function (next) {
  this.options.runValidators = true;
  next();
});

module.exports = entitySchema;
