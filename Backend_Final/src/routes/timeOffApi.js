const express = require("express");
const router = express.Router();
const {
  createTimeOff,
  readTimeoffList,
} = require("../controller/timeOffController");

//api/food
router.route("/").get(readTimeoffList);
router.route("/").post(createTimeOff);

module.exports = router;
