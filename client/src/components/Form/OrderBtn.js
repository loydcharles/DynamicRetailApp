import React from "react";

export const OrderBtn = props =>
  <button {...props} style={{ float: "right" }} className="btn btn-info">
    {props.children}
  </button>;