const express = require("express");
const router = express.Router();
const {
  deleteSoftFood,
  deleteVendor,
} = require("../controller/generalController");

router.route("/deleteSoft/:id").put(deleteSoftFood);
router.route("/deleteVendor/:id").put(deleteVendor);

module.exports = router;
