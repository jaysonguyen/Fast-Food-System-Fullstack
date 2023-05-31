const express = require("express");
const router = express.Router();

const { getAllPosition } = require("../controller/positionController");

//api/position
router.route("/list").get(getAllPosition);

module.exports = router;
