const express = require("express");

const router = express.Router();

const protect = require("../middlewares/auth.middleware");

const admin = require("../middlewares/admin.middleware");

const {
  getDashboardStats,
} = require("../controllers/dashboard.controller");

router.get(
  "/stats",
  protect,
  admin,
  getDashboardStats
);

module.exports = router;