import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./shared/App";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./shared/AppContext";

let value = {};
if (window && window.initialData) {
  value = window.initialData;
}

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <AppContext.Provider value={value}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext.Provider>
);
