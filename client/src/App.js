import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Products from "./pages/Products/Products.js";
import Orders from "./pages/Products/Orders.js";
import Navpills from "./pages/Navpills.js";

const App = () => 
<Router>
<div>
  <Navpills />  
  <Route exact path="/Products" component={Products} />
  <Route exact path="/Orders" component={Orders} />
  {/*<Route path="/Fullfil" component={Fullfil} />  */}
</div>
</Router>;

export default App;
