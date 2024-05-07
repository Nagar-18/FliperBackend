const { default: mongoose } = require("mongoose");

const orderSchema = mongoose.Schema({
  productName: {
    type: String,
    required: true,
    minlength: 3,
  },
  quantity: {
    type: Number,
    required: true,
  },
  pricing: {
    type: Number,
    required: true,
  },
  mrp: {
    type: Number,
    required: true,
  },
  p_id: {
    type: String,
    required: true,
    unique: [true, "purchase id should be unique"],
  },
  c_id: {
    type: String,
    required: true,
    
  },
});

const Order = new mongoose.model("orderData", orderSchema);
module.exports = Order;
