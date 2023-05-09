const express = require("express");
const {
  getUserList,
  createNewUser,
  getUserWithStaffRefData,
  getUserByIDData,
} = require("../controller/userController");
const router = express.Router();

// /api/user
router.route("/").get(getUserList);
router.route("/nostaff").get(getUserWithStaffRefData);
router.route("/get/:id").get(getUserByIDData);
router.route("/").post(createNewUser);

module.exports = router;
