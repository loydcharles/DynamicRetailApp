const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  quantity: { type: Number, default: 0},
  date: { type: Date, default: Date.now },
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product"
  }]
});

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;

