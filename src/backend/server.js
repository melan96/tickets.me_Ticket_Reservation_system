const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

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

let Request = express.Router();
Request = require("../backend/schema");

Request.route("/addRequest").post((req, res) => {
  let request = new Request(req.body);
  request
    .save()
    .then(request => {
      req.status(200);
      console.log("added Request instance record..");
    })
    .catch(err => {
      console.log(err + "==> captured");
    });
});

app.listen(4001, () => {
  console.log("listen to server ...");
});
