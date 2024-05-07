const { default: mongoose } = require("mongoose");

const shippingSchema = mongoose.Schema({
  address: {
    type: String,
    required: true,
    minlength: 3,
  },

  city: {
    type: String,
    required: true,
  },
  pincode: {
    type: Number,
    required: true,
  },

  p_id: {
    type: String,
    required: true,

  },
  c_id: {
    type: String,
    required: true,
  },
});

const ShippingDetails = new mongoose.model("shippingData", shippingSchema);
module.exports = ShippingDetails;
