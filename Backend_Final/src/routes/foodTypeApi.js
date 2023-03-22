const express = require("express");
const router = express.Router();
const {
  getFoodTypeList,
  getFoodByT,
  createNewFoodT,
} = require("../controller/foodTypeController");

//api/food/type
router.route("/").get(getFoodTypeList);
router.route("/").post(createNewFoodT);
router.route("/:id").get(getFoodByT);

module.exports = router;
