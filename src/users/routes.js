const { Router } = require("express");

const userRouter = Router();

const { signupuUser, getUsers } = require("./controlers");

// addUsers
userRouter.post("/users/signup", signupuUser);

// getUsers
userRouter.get("/users/getUsers", getUsers);

module.exports = userRouter;
