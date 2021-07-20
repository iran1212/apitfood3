const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
  products: [
    {
      type: String,
      required: true
    }
  ],
  total: {
    type: Number,
    required: true
  },
  client: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("order", orderSchema);
