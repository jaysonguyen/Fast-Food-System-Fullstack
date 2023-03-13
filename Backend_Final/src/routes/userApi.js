const express = require("express");
const router = express.Router();
const { getUserList } = require("../controller/userController");

router.route("/").get(getUserList);

module.exports = router;
