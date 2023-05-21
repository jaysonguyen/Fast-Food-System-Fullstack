const express = require("express");
const router = express.Router();
const { getAllUnit } = require("../controller/unitController");

// /api/unit
router.route(`/`).get(getAllUnit);

module.exports = router;
