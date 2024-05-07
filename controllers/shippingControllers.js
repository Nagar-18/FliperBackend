const asyncHandler = require("express-async-handler");
const ShippingDetails = require("../models/shippingSchema");

const create = asyncHandler(async (req, res) => {
  const { address, city, pincode, p_id, c_id } = req.body;

 
  const  ship = await ShippingDetails.create({
    address,
   
    city,
     pincode,
    p_id,
    c_id,
  });
  if (ship) {
    res.status(200).json({
      success: true,
    });
  } else {
    res.status(400).json({
      success: false,
    });
    throw new Error("failed to create shipp");
  }
});

const getShippingDetails = asyncHandler(async (req, res) => {
  const { p_id } = req.body;
  const shipp = await ShippingDetails.findOne({ p_id });
  
  if (shipp) {
    res.json(shipp);
  } else {
    res.status(400).json(null);

    throw new Error("Invalid product_id");
  }
});

// /api/user?search=piyush
const allshipp = asyncHandler(async (req, res) => {

  try {
    const alldata = await ShippingDetails.find();

    res.json(alldata);
  } catch (error) {
    console.log(error)
  }
  
});

module.exports = { create, getShippingDetails, allshipp };
