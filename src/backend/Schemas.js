const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
  userFullName: String,
  userEmail: String,
  userMobileNumber: String,
  userAddressLine01: String,
  userAddressLine02: String,
  userAddressLine03: String
});

exports.UserSchm = UserShema;
