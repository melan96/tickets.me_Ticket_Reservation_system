const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const Schemas = require("../backend/Schemas");

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

app.post("/requestUserInfo", (req, res) => {
  let savedUser = new Schemas.UserSchm(req.body);
  savedUser
    .save()
    .then(res => console.log(res))
    .catch(err => console.log(err));
});

app.listen(4001, () => {
  console.log("listen to server ...");
});
