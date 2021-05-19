import Home from "@pages/Home";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BasicUI from "@layouts/BasicUI";
import { Provider } from "react-redux";
import configure from "@store/store";

const store = configure();

render(
  <Provider store={store}>
    <BrowserRouter>
      <BasicUI />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
