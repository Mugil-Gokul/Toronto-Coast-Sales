const User = require("../models/User");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");


const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email,
    });

    if (!user) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials" });
    }

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match) {
      return res
        .status(401)
        .json({ message: "Invalid Credentials" });
    }

    res.status(200).json({
      success: true,
      token: generateToken(user)
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  login,
};