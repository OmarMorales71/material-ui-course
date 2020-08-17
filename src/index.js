import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";
import { Router } from "react-router-dom";
import {createBrowserHistory} from 'history'
import { CssBaseline } from "@material-ui/core";

const history = createBrowserHistory()

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router history={history}>
        <CssBaseline />
        <App/>
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
