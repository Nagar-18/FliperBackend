const express = require("express");
const {
  create,
  getOrder,
  allOrder,
} = require("../controllers/orderControllers");

const router = express.Router();
router.route("/").get(allOrder);
router.route("/").post(create);
router.post("/getOrder", getOrder);

module.exports = router;
