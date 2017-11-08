const router = require("express").Router();
const productRoutes = require("./products.js");
const orderRoutes = require("./orders.js");

// Product routes
router.use("/products", productRoutes);
// Order routes
router.use("/orders", orderRoutes);

module.exports = router;
