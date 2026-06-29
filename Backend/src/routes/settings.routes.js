const express = require("express");

const router = express.Router();

const { changePassword } = require("../controllers/settings.controller");

const protect = require("../middlewares/auth.middleware");

// only admin

router.put("/password", protect, changePassword);

module.exports = router;
