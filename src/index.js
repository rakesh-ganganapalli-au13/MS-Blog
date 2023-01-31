import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { ToastContainer } from "react-toastify";
import { injectStyle } from "react-toastify/dist/inject-style";

injectStyle();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <App />
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
