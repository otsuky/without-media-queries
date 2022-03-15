import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles/reset.css";
import "./styles/base.css";
import { App } from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
