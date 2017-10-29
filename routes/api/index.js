const router = require("express").Router();
const productRoutes = require("./products");
//const productRoutes = require("./orders");

// Product routes
router.use("/products", productRoutes);
// Order routes
//router.use("/orders", orderRoutes);

module.exports = router;
