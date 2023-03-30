const express = require("express");
const router = express.Router();
const { geStaffList } = require("../controller/staffController");

router.route("/").get(geStaffList);
// router.route("/").post(createBill);

module.exports = router;
