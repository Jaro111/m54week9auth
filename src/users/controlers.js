const User = require("./model");
const jwt = require("jsonwebtoken");

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
    // res.status(201).json({ message: `Users uploaded`, users: users });
    req.user = users;
    //
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

//
const login = async (req, res) => {
  try {
    if (req.authCheck) {
      const user = {
        id: req.user.id,
        username: req.authCheck.username,
      };
      res
        .status(201)
        .json({ message: "persistant login successfull", user: user });
      return;
    }

    const token = await jwt.sign({ id: req.user.id }, process.env.SECRET);

    const user = {
      id: req.user.id,
      username: req.username,
      token: token,
    };

    // const user = await User.findOne({ where: { username: req.body.username } });
    // const matched = await bcrypt.compare(
    //   req.body.password,
    //   user.dataValues.password
    // );
    // if (!matched) {
    //   res.status(401).json({ message: "nooo" });
    // }

    // console.log(req.user);
    res.send({ message: "Successful login", user: user });
    // req.user
  } catch (error) {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getOnuser = async (req, res) => {
  res.status(200).json({ message: error.message, error: error });
};

module.exports = {
  signupuUser: signupuUser,
  getUsers: getUsers,
  login: login,
};
