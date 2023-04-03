const express = require("express");
const router = express.Router();
const {
  getBillList,
  createBill,
  getLevel0,
} = require("../controller/orderController");

// api/order
router.route("/").get(getBillList);
router.route("/").post(createBill);
router.route("/:id").get(getLevel0);

module.exports = router;
