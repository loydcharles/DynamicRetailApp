import React from "react";
import ReactDOM from "react-dom";
import { makeMainRoutes } from './routes';

import App from "./App";

const routes = makeMainRoutes();

ReactDOM.render(
  routes,
  document.getElementById('root')
);