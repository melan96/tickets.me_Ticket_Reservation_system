const mongoose = require("mongoose");

const UserShema = new mongoose.Schema({
  userFullName: String,
  userEmail: String,
  userMobileNumber: String,
  userAddressLine01: String,
  userAddressLine02: String,
  userAddressLine03: String
});

module.exports = mongoose.model("User-data-model", UserShema);

