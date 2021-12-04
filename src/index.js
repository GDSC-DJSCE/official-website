import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import {ThemeProvider} from '../src/ThemeContext' ;

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ ThemeProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
