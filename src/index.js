import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import ToggleColorModeProvider from "./utils/ToggleColorMode";
import App from "./components/App";
import store from "./app/store";
import "./index.css";

ReactDom.render(
  <Provider store={store}>
    <ToggleColorModeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ToggleColorModeProvider>,
  </Provider>,
  document.getElementById("root"),
);
