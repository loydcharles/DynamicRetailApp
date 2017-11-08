import axios from "axios";

export default {
  // Gets all products
  getProducts: function() {
    return axios.get("/api/products");
  },
  // Gets the product with the given id
  getProduct: function(id) {
    return axios.get("/api/products/" + id);
  },
  // Deletes the product with the given id
  deleteProduct: function(id) {
    return axios.delete("/api/products/" + id);
  },
  // Saves a product to the database
  saveProduct: function(productData) {
    return axios.post("/api/products", productData);
  },
  // Gets all Orders
  getOrders: function() {
    return axios.get("/api/orders");
  },
  // Gets the order with the given id
  getOrder: function(id) {
    return axios.get("/api/orders/" + id);
  },
  // Deletes the order with the given id
  deleteOrder: function(id) {
    return axios.delete("/api/orders/" + id);
  },
  // Saves a order to the database
  saveOrder: function(orderData) {
    return axios.post("/api/orders", orderData);
  }
};
