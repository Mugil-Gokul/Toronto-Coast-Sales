const express = require("express");

const router = express.Router();


const protect =
require("../middlewares/auth.middleware");
const admin =
require("../middlewares/admin.middleware");
const validateObjectId = require("../middlewares/validateObjectId.middleware");
// const upload =
// require("../middlewares/upload.middleware");


const {

createTruck,
getTrucks,
getSingleTruck,
updateTruck,
deleteTruck

} = require("../controllers/truck.controller");



// 🔒 All truck routes protected


// Get all trucks
router.get("/", protect, getTrucks);

// Get single truck
router.get(
  "/:id",
  protect,
  validateObjectId,
  getSingleTruck
);

// Create truck
router.post(
  "/",
  protect,
  admin,
  createTruck
);

// Update truck
router.put(
  "/:id",
  protect,
  admin,
  validateObjectId,
  updateTruck
);

// Delete truck
router.delete(
  "/:id",
  protect,
  admin,
  validateObjectId,
  deleteTruck
);



module.exports = router;