const express = require("express");
const router = express.Router();
const { login } = require("../controller/auth/authController");

//auth/login
router.route("/login").post(login);

module.exports = router;
