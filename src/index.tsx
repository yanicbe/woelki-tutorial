import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Wrapper from "./page-components/root/wrapper";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Wrapper>
        <Routes />
      </Wrapper>
    </BrowserRouter>
  </React.StrictMode>
);
