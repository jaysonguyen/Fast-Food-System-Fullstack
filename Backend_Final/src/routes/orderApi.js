const express = require("express");
const router = express.Router();
const {
  getBillList,
  createBill,
  getLevel0,
  deleteBill,
  updateBill,
  paymentBill,
} = require("../controller/orderController");

// api/order
router.route("/").get(getBillList);
router.route("/").post(createBill);
router.route("/payment/:total").post(paymentBill);
router.route("/:id").get(getLevel0);
router.route("/unfinished").get(getLevel0);
router.route("/finished").get(getLevel0);

router.route("/:id").delete(deleteBill);
router.route("/:id").put(updateBill);

module.exports = router;
