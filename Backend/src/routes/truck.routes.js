const express = require("express");

const router = express.Router();


const protect =
require("../middlewares/auth.middleware");
const admin =
require("../middlewares/admin.middleware");


const {

createTruck,
getTrucks,
getSingleTruck,
updateTruck,
deleteTruck

} = require("../controllers/truck.controller");



// 🔒 All truck routes protected


router.get(
  "/",
  protect,
  getTrucks
);


router.get(
  "/:id",
  protect,
  getSingleTruck
);


router.post(
 "/",
 protect,
 admin,
 createTruck
);


router.put(
  "/:id",
  protect,
  updateTruck
);


router.delete(
  "/:id",
  protect,
  deleteTruck
);



module.exports = router;