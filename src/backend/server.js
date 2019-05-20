const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
var User = require("../backend/user_sch");

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
    name: "jsonObj",
    confirmation: userSession.confirmationkey
  };
  res.send(unit);
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

  // send mail with defined transport object
  let info = transporter.sendMail({
    from: '"TicketsMeReply👻" <noreply-tic>', // sender address
    to: JSON.stringify(req.body.userEmail), // list of receivers
    subject: "Confirm your email", // Subject line
    html: `<html><h3>Confirm Your Email Address ${
      userSession.confirmationkey
    }</h3></html>` // html body
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
