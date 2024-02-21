const { Router } = require("express");

const userRouter = Router();

const { hashPass, comparePass, tokenCheck } = require("../middleware/auth");

const { signupuUser, getUsers, login } = require("./controlers");

// signUp
userRouter.post("/users/signup", hashPass, signupuUser);

// comparePass
userRouter.post("/users./login", comparePass, login);

// addUsers
userRouter.post("/users/signup", signupuUser);

// getUsers
userRouter.get("/users/getUsers", getUsers);

// token check
userRouter.get("/users/authCheck", tokenCheck, login);

module.exports = userRouter;
