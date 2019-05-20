const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
var User = require("../backend/user_sch");
var Payment = require("../backend/payment_sch");

mongoose.Promise = global.Promise;
mongoose
  .connect(
    "mongodb+srv://melan96:melan96@mongo-todo-yebxu.mongodb.net/test?retryWrites=true"
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch(err => {
    console.log(err);
  });

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use(express.static("public"));

const train_data_scheme = new mongoose.Schema({
  to: String,
  from: String,
  trainNumber: String,
  Price: String
});

let userSession = 0;
let userGlobEmail = "";

const TrainData = mongoose.model("train_data", train_data_scheme);

app.get("/getda", (req, res) => {
  TrainData.find({}, (err, doc) => {
    console.log("this ser.js executed");
    if (!err) {
      res.send(doc);
      console.log(doc);
    } else {
      console.log(err);
    }
  });
});

app.get("/getKey", (req, res) => {
  unit = {
    functionDataName: "user-email-confirm",
    confirmation: userSession.confirmationkey
  };
  res.send(unit);
});

function transactionIDGEN() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
app.post("/paymentSucess", (req, res) => {
  req.body.transactionID = transactionIDGEN();
  let paymentData = new Payment(req.body);
  console.log("/paymentSuccess");
  paymentData
    .save()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ticketmelk@gmail.com", // generated ethereal user
      pass: "windows8pro" // generated ethereal password
    }
  });

  //session key management for user

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"TicketsMe Email Confirmation" <noreply-tmc>', // sender address
    to: userGlobEmail, // list of receivers
    subject: "[TicketsMe Lk] Confirm your Email", // Subject line
    html: `<html><h3>Thank your for shopping with us</h3>
      <br/>
      <p>Dear customer, We recieved your payment successfully</p>
    
      <br />
  <h5>TicketsME Lk EmailGateway</h5>
      </html>` // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});
app.post("/senduser", (req, res) => {
  let userDataLoad = new User(req.body);

  //saved data online mongoose data base
  userDataLoad
    .save()
    .then(res => console.log(res))
    .catch(err => console.log(err));

  userSession = sessionKeyManagement();

  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "ticketmelk@gmail.com", // generated ethereal user
      pass: "windows8pro" // generated ethereal password
    }
  });

  //session key management for user

  userGlobEmail = JSON.stringify(req.body.userEmail);
  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"TicketsMe Email Confirmation" <noreply-tmc>', // sender address
    to: JSON.stringify(req.body.userEmail), // list of receivers
    subject: "[TicketsMe Lk] Confirm your Email", // Subject line
    html: `<html><h3>Confirm Your Email Address</h3>
    <br/>
    <p>Your six(6) digit confirmation key is : </p>
    <h3>${userSession.confirmationkey}</h3>

    <br />
<h5>TicketsME Lk EmailGateway</h5>
    </html>` // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
});

function randomKeyGenerator() {
  return Math.floor(Math.random() * 999999) + 100000;
}

function sessionKeyManagement() {
  const userKeySession = {
    confirmationkey: randomKeyGenerator()
  };
  return userKeySession;
}

app.listen(4001, () => {
  console.log("listen to server ...");
});
