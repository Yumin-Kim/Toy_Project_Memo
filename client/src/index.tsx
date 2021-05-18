import Home from "@pages/Home";
import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import BasicUI from "@layouts/BasicUI";

render(
  <BrowserRouter>
    <BasicUI />
  </BrowserRouter>,
  document.getElementById("app")
);
