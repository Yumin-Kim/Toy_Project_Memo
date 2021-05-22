import Home from "@pages/Home";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BasicUI from "@layouts/BasicUI";
import { Provider } from "react-redux";
import configure from "@store/store";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
const generateClassName = createGenerateClassName({
  productionPrefix: "c",
});
const store = configure();

render(
  <Provider store={store}>
    <StylesProvider generateClassName={generateClassName}>
      <BrowserRouter>
        <BasicUI />
      </BrowserRouter>
    </StylesProvider>
  </Provider>,
  document.getElementById("app")
);
