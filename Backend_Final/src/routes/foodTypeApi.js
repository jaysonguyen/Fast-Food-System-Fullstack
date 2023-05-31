const express = require("express");
const router = express.Router();
const {
  getFoodTypeList,
  getFoodByT,
  createNewFoodT,
  ediTypeFood,
} = require("../controller/foodTypeController");

//api/food/type
router.route("/").get(getFoodTypeList);
router.route("/").post(createNewFoodT);
router.route("/update").put(ediTypeFood);
router.route("/:id").get(getFoodByT);

module.exports = router;
