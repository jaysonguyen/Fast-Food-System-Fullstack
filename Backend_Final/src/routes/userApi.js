const express = require("express");
const {
  getUserList,
  createNewUser,
  getUserWithStaffRefData,
  getUserByIDData,
  getUserByEmailData,
  deleteUserAccount,
} = require("../controller/userController");
const router = express.Router();

// /api/user
router.route("/").get(getUserList);
router.route("/nostaff").get(getUserWithStaffRefData);
router.route("/get/email").get(getUserByEmailData);
router.route("/get/:id").get(getUserByIDData);
router.route("/").post(createNewUser);
router.route("/:id").delete(deleteUserAccount);

module.exports = router;
