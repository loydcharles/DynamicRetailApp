import React from "react";

var divStyle = {
  size: 4
};

export const Input1 = props =>
  <div class="col-2" className="form-group" style={divStyle}>
    <input className="form-control" {...props} maxlength="2"/>
  </div>;



//ReactDOM.render(<div style={divStyle}>Hello World!</div>, mountNode);