const express = require("express");
const router = express.Router();
const { getAllShift } = require("../controller/shiftController");

router.route("/").get(getAllShift);

module.exports = router;
