require("dotenv").config();
const express = require("express");
const cors = require("cors");

const User = require("./users/model");
const userRouter = require("./users/routes");

const app = express();
app.use(cors());

const port = process.env.PORT || 5001;

app.use(express.json());

app.use(userRouter);

// =============== Middleware example ====================
const sendRes = async (req, res) => {
  res.send({ data: req.body });
};

const firstFunc = async (req, res, next) => {
  req.body.first = "one";

  next();
};

const secondFunc = async (req, res, next) => {
  req.body.second = "two";
};

app.post("/middlewareexample", firstFunc, secondFunc, sendRes);

// =====================================================

const SyncTables = () => {
  User.sync();
};

app.listen(port, () => {
  SyncTables();
  console.log(`Server is listening on ${port}`);
});
