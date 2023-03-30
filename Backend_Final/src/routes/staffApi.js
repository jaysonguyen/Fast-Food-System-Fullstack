const express = require("express");
const {
  readStaffList,
  updateStaff,
  removeStaff,
  addStaff,
} = require("../controller/staffController");
const router = express.Router();

router.route("/list").get(readStaffList);
router.route("/update/:id").put(updateStaff);
router.route("/delete/:id").delete(removeStaff);
router.route("/create").post(addStaff);

module.exports = router;
