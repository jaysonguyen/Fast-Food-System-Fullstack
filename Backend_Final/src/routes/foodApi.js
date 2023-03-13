const express = require("express");
const router = express.Router();
const { getFoodList, createFood } = require("../controller/foodController");

//api/food/
router.route("/").get(getFoodList);
router.route("/create").post(createFood);

module.exports = router;
