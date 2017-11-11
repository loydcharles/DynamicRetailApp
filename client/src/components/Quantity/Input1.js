import React from "react";
import "./input1.css";

export const Input1 = props =>
  <div className="form-group" maxlength="2">
    <input className="form-control" {...props} />
  </div>;
