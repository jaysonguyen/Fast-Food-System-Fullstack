const  {getSupplier, addSupplier, removeSupplier, editSupplier} = require("../controller/supplierController");
const express = require("express");
const router = express.Router();

router.route("/get").get(getSupplier);
router.route("/create").post(addSupplier);
router.route("/remove/:id").delete(removeSupplier);
router.route("/edit/:id").put(editSupplier);

module.exports = router;