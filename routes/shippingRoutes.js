const express = require("express");
const {
  create,
  getShippingDetails,
  allshipp,
} = require("../controllers/shippingControllers");

const router = express.Router();
router.route("/").get(allshipp);
router.route("/").post(create);
router.get("/getShipping", getShippingDetails);

module.exports = router;
