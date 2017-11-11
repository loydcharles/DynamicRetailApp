import React from "react";
import { Link } from "react-router-dom";

const Navpills = () =>
  <ul className="nav nav-tabs">
    <li className={window.location.pathname === "/" ? "active" : ""}>
      <Link to="/">Home</Link>
    </li>
    <li className={window.location.pathname === "/Orders" ? "active" : ""}>
      <Link to="/Orders">Order</Link>
    </li>    
    <li className={window.location.pathname === "/Products" ? "active" : ""}>
      <Link to="/Products">Products</Link>
    </li>
    <li className={window.location.pathname === "/Fullfil" ? "active" : ""}>
      <Link to="/Fullfil">Fullfil</Link>
    </li>
  </ul>;

export default Navpills;
