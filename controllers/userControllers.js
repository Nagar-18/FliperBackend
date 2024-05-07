const asyncHandler = require("express-async-handler");
const User = require("../models/userSchema");

const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, contact, address, city, c_id } = req.body;

  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please Enter all Fields");
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error("User already Exist");
  }
  const user = await User.create({
    name,
    contact,
    email,
    city,
    c_id,
    password,
    address,
  });
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      contact: user.contact,
      email: user.email,
      password: user.password,
      address: user.address,
      city: user.city,
      c_id: user.c_id,

      //  /for remember the currnt user
    });
  } else {
    res.send(400);
    throw new Error("failed to create user");
  }
});

const authUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && password === user.password) {
    res.json({
      c_id: user.c_id,
      name: user.name,
      contact: user.contact,
      email: user.email,
      password: user.password,
      address: user.address,
    });
  } else {
    res.json({ sucess: false });

    throw new Error("Invalid Creadtinals");
  }
});

// /api/user?search=piyush
const allUser = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();

    res.send(users);
  } catch (error) {
    console.log(error);
  }
});
const getUser = asyncHandler(async (req, res) => {
  try {
    const { c_id } = req.body;

    const user = await User.findOne({ c_id });

    if (user) {
      res.json(user);
    } else {
      res.status(400).json(null);

      throw new Error("Invalid customer_id");
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = { registerUser, authUser, allUser, getUser };
