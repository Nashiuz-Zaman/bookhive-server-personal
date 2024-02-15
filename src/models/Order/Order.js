const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  customer: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  qty: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order", orderSchema);
