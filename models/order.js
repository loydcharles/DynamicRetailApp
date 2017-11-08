const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  customer_name: { type: String, required: true },
  date: { type: Date, default: Date.now },
  cart: [{item: String, quantity: Number, price: Number}]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
