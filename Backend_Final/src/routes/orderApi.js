const express = require("express");
const router = express.Router();
const { getBillList, createBill } = require("../controller/orderController");

router.route("/").get(getBillList);
router.route("/").post(createBill);

module.exports = router;
