const User = require("./model");

// addUser
const signupuUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });
    //
    res.status(201).json({ message: `user created`, user: user });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

// getUsers
const getUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(201).json({ message: `Users uploaded`, users: users });
    //
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

//
const login = async (req, res) => {
  try {
    res.send("Success correct password!!!");
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

module.exports = {
  signupuUser: signupuUser,
  getUsers: getUsers,
  login: login,
};
