const mongoose = require("mongoose");

const PaymentSchema = new mongoose.Schema({
  paymentCardNo: String,
  paymentCardEXP: String,
  paymentAmount: String,
  transactionID: String,
  transactionTIMESTAMP: { type: Date, default: Date.now },
  paymentNIC: { type: String, default: "NILL" }
});

module.exports = mongoose.model("Payment-data-model", PaymentSchema);
