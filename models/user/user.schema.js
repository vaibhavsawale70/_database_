const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcrypt');

const { Schema } = mongoose;

const companySchema = new Schema(
  {
    name: {
      type: String,
      maxlength: 50,
    
    },
    email: {
      type: String,
      required: [true, 'Please Enter Your Email'],
      unique: true,
      sparse: true,
      validate: [validator.isEmail, 'Please Enter Correct Email'],
    },
    password: {
      type: String,
      required: [true, 'Please Enter Your Password'],
      min: [6, 'Minimum 6 Character Required, Got {VALUE}'],
      match: [
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/,
        'Password Must Contain Correct Format',
      ],
      sparse: true,
    },
    mobile_number: {
      type: String,
      unique: true,
      min: [10, 'Phone Number Must Contain 10 Digits'],
     
      validate: [validator.isMobilePhone, 'Please Enter Correct Mobile Number'],
      sparse: true,
    },
    gid: {
      type: String,
      default: '',
    },
    referral_code: {
      type: String,
      default: '',
    },
    first_name: {
      type: String,
     
    },
    last_name: {
      type: String,
     
    },
    user_role: {
      type: String,
      enum: {
        values: ['ADMIN', 'USER', 'STANDARD'],
        message: '{VALUE} is not supported',
      },
      default: 'USER',
    },
    profile_pic: {
      type: String,
      default: '',
    },
    status: {
      type: String,
      default: 'Pending', // Pending Active Inactive
    },
    active: {
      type: Boolean,
      default: false,
    },
    flag: {
      type: Boolean,
      default: true,
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
/// ////////////////////////////////////////////////////////////////////
companySchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  console.log('=====generated salt=====\n', salt);
  const Salt = (await salt).toString();
  this.password = await bcrypt.hash(this.password, Salt);
  next();
});

companySchema.methods.passwordVerification = async function (Password) {
  return await bcrypt.compare(Password, this.password);
};

companySchema.pre('updateOne', async function (next) {
  this.options.runValidators = true;
  next();
});
/// ////////////////////////////////////////////////////////////////////

module.exports = companySchema;
