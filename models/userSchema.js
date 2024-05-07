const { default: mongoose } = require("mongoose");

const validator = require("validator");
const bcrypt = require("bcryptjs");
const { default: isEmail } = require("validator/lib/isEmail");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  contact: {
    type: String,
    required: true,
    length: 10,
    unique: [true, "Contact no already present"],
    validate(value) {
      if (!validator.isMobilePhone(value)) throw new Error("invalid  Phone no");
    },
  },
  email: {
    type: String,
    required: true,
    unique: [true, "Email is already Present"],
    validate(value) {
      if (!isEmail(value)) throw new Error("invalid  Email");
    },
  },
  password: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  c_id: {
    type: String,
    required: true,
    unique: [true, "customer id should be unique"],
  },
});

const User = new mongoose.model("userData", userSchema);
module.exports = User;
