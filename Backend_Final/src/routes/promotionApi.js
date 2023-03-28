const express = require("express");
const router = express.Router();
const {
  getPromotion,
  addPromotion,
  editPromotion,
  removePromotion,
} = require("../controller/promotionController");

router.route(`/get`).get(getPromotion);
router.route(`/create`).post(addPromotion);
router.route(`/edit/:id`).put(editPromotion);
router.route(`/remove/:id`).delete(removePromotion);

module.exports = router;
