import React from "react";
import "./input1.css";

var divStyle = {
  size: 4
};

export const Input1 = props =>
  <div className="form-group" maxlength="2">
    <input className="form-control" {...props} />
  </div>;



//ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);