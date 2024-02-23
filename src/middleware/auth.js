const bcrypt = require("bcrypt");

const User = require("../users/model");

const saltRounds = parseInt(process.env.SALT_ROUNDS);

const hashPass = async (req, res, next) => {
  try {
    //
    console.log("req.body.password: ", req.body.password);
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    // hashed password
    //
    req.body.password = hashedPassword;
    // swap the value 'helloworls in req.body.password to the value of hashedPassword
    console.log("req.body.password: ", req.body.password);
    next();
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const comparePass = async (req, res, next) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    const myPassword = user.dataValues.password;
    console.log(myPassword);

    const checkPassword = await bcrypt.compare(req.body.password, myPassword);

    if (!checkPassword) {
      res.status(401).json({ message: "Wrong password" });
      return;
    }
    req.user = user;
    next();
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

module.exports = { hashPass: hashPass, comparePass: comparePass };
