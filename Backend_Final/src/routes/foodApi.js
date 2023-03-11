const express = require("express");
const router = express.Router();
const { getFoodList, createFood } = require("../controller/foodController");

router.route("/").get(getFoodList);
router.route("/").post(createFood);


module.exports = router;
