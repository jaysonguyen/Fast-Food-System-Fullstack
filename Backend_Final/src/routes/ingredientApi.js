const express = require("express");
const router = express.Router();
const { getAllIngredients } = require("../controller/ingredientController");

// api/ingredient
router.route("/").get(getAllIngredients);

module.exports = router;
