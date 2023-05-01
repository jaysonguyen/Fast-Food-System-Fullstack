const express = require("express");
const { getUserList, createNewUser } = require("../controller/userController");
const router = express.Router();

// /api/user
router.route("/").get(getUserList);
router.route("/").post(createNewUser);

module.exports = router;
