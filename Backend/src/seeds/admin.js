const bcrypt = require("bcryptjs");
const User = require("../models/User");
const connectDB = require("../config/db");
require("dotenv").config();

const createAdmin = async () => {
  await connectDB();

  const hashedPassword =
    await bcrypt.hash("Admin@123", 10);

  await User.create({
    name: "Admin",
    email: "admin@torontocoast.com",
    password: hashedPassword,
    role: "admin",
  });

  console.log("Admin Created");

  process.exit();
};

// createAdmin()