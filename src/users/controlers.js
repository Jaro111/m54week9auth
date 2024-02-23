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
    // What i want to achieve?
    // User to login
    // What do i need to happend for the user be able to login
    // Enter username and password
    // Send username and password
    // Compare passwordd with hasjhes on db

    // Send back user data to frontEnd
    // What kind of data am I sending back
    // user id, username, not password, not email
    // From db user table
    // Do we hav the data. If so, where?
    // Yes. We get it in comparePass to compare user password
    // Yes
    // How do we send it back
    // In a response in login function
    // Do we have access to user data
    // No. Do the user exist in comparePass
    // Can we get it from compare pass. If so, how?
    // Yes.
    // next()

    // const user = await User.findOne({ where: { username: req.body.username } });
    // const matched = await bcrypt.compare(
    //   req.body.password,
    //   user.dataValues.password
    // );
    // if (!matched) {
    //   res.status(401).json({ message: "nooo" });
    // }

    // console.log(req.user);
    res.status(201).json({ message: "Successful login", user: req.user });
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
