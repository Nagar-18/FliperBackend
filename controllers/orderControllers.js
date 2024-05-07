const asyncHandler = require("express-async-handler");
const Order = require("../models/orderSchema");

const create = asyncHandler(async (req, res) => {
  const { productName, quantity, pricing, mrp, p_id, c_id } = req.body;

  const order = await Order.create({
    productName,
    quantity,
    pricing,
    mrp,

    p_id,
    c_id,
  });
  if (order) {
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
    });
    throw new Error("failed to create order");
  }
});

const getOrder = asyncHandler(async (req, res) => {
  const { c_id } = req.body;
 
  const order = await Order.findOne({ c_id });

  if (order) {
    res.json(order);
  } else {
    res.status(400).json(null);

    throw new Error("Invalid product_id");
  }
});

// /api/user?search=piyush
const allOrder = asyncHandler(async (req, res) => {
  try {
    const users = await Order.find();

    res.send(users);
  } catch (error) {
    throw new Error("invlaid");
  }
});

module.exports = { create, getOrder, allOrder };
