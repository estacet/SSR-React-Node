import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./shared/App";
import { BrowserRouter } from "react-router-dom";
import { AppContextWrapper } from "./shared/context/AppContext";

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <AppContextWrapper>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContextWrapper>
);
