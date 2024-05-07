const express = require("express");
const {
  registerUser,
  authUser,
  allUser,
  getUser,
} = require("../controllers/userControllers");


const router = express.Router();
router.route("/").get(allUser);
router.route("/").post(registerUser);
router.route("/getuser").post(getUser);

router.post("/login", authUser);

module.exports = router;
