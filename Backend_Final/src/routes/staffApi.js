const express = require("express");
const router = express.Router();
const {
  readStaffList,
  updateStaff,
  removeStaff,
  addStaff,
  getStaffByUserID,
  updateStaffUser,
  getStaffWithoutUserRef,
} = require("../controller/staffController");

// /api/staff
router.route("/list").get(readStaffList);
router.route("/update/:id").put(updateStaff);
router.route("/delete/:id").delete(removeStaff);
router.route("/create").post(addStaff);
router.route("/user/:id").get(getStaffByUserID);
router.route("/nouser").get(getStaffWithoutUserRef);
router.route("/user/update/:id").put(updateStaffUser);

module.exports = router;
