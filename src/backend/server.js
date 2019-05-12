const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
// const Schemas = require("../backend/Schemas");

//remote connection string = "mongodb+srv://melan96:melan96@mongo-todo-yebxu.mongodb.net/test?retryWrites=true"
mongoose.Promise = global.Promise;
mongoose
  .connect("mongodb://mongodb0.localhost.com:27017/admin")
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

app.post("/senduser", (req, res) => {
  const UserShema = new mongoose.Schema({
    userFullName: String,
    userEmail: String,
    userMobileNumber: String,
    userAddressLine01: String,
    userAddressLine02: String,
    userAddressLine03: String
  });

  var User = mongoose.model("User-data-model", UserShema);
  let userDataLoad = new User(req.body);

  //saved data online mongoose data base
  userDataLoad
    .save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

app.listen(4001, () => {
  console.log("listen to server ...");
});
