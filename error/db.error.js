exports.mongooseErrorHandler = async (err) => {
  console.log(err);
  let errors = {};
  // #region Duplicate Key Error
  if (err.code && err.code === 11000) {
    console.log('got duplicate');
    // user email Key Pattern Error
    if (err.keyPattern.email) {
      console.log('got email duplicate error');
      errors.message = 'Email Already Exist';
    }
    // user phone Key Pattern Error
    if (err.keyPattern.mobile_number) {
      errors.message = 'Phone Already Exist';
    }
    // entity gstin pattern error
    if (err.keyPattern.gstin) {
      errors.message = 'Entity GSTIN Already Exist';
    }
    // entity company mobile number pattern error
    if (err.keyPattern.company_mobile) {
      errors.message = 'Entity Mobile Number Exist';
    }
    // entity company email pattern error
    if (err.keyPattern.company_email) {
      errors.message = 'Entity Email Already Exist';
    }
    // entity pan number pattern error
    if (err.keyPattern.pan) {
      errors.message = 'Entity PAN Already Exist';
    }
    // entity tan number pattern error
    if (err.keyPattern.tan) {
      errors.message = 'Entity TAN Already Exist';
    }
    // entity cin number pattern error
    if (err.keyPattern.cin) {
      errors.message = 'Entity CIN Already Exist';
    }
    // if (err.keyPattern.account_no) {
    //   errors.message = 'Bank Account Number Already Exist';
    // }
  }
  // #endregion
  /// /////////////////////////////////////////////////////////
  // #region Custom validation error
  if (err.message.includes('user validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  // #endregion

  // #region Invoice validation error
  if (err.message.includes('invoice validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  // #endregion

  // #region Entity validation failed
  if (err.message.includes('entity validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  // #endregion

  // #region Bank Validation Failed
  if (err.message.includes('bank validation failed')) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors = properties.message;
    });
  }
  // #endregion
  return errors;
};
