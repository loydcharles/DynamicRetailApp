import React from "react";
import Products from "./pages/Products/Products.js";
import Orders from "./pages/Products/Orders.js";
import Nav from "./components/Nav";

const App = () => 
  <div>
    <Nav />
    <Products />
    <Orders />
  </div>;

export default App;
