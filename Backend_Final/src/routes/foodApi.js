const express = require("express");
const router = express.Router();
const {
  getFoodList,
  createFood,
  deteleF,
  updateF,
  getLevel0,
} = require("../controller/foodController");

//api/food
router.route("/").get(getFoodList);
router.route("/").post(createFood);
router.route("/:id").put(updateF);
router.route("/:id").get(getLevel0);
// router.route("/delete/").get(getDeleteList);
router.route("/delete/:id").delete(deteleF);

module.exports = router;
