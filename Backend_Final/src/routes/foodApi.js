const express = require("express");
const router = express.Router();
const {
  getFoodList,
  createFood,
  updateF,
  deteleF,
  getFoodById,
} = require("../controller/foodController");

//api/food/
router.route("/").get(getFoodList);
// router.route("/create").post(createFood);
router.route("/").post(createFood);
router.route("/:id").delete(deteleF);
router.route("/:id").put(updateF);
router.route("/:id").get(getFoodById);

module.exports = router;
