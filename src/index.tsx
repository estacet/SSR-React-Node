import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./shared/App";
import { BrowserRouter } from "react-router-dom";
import { AppContext } from "./shared/context/AppContext";

ReactDOM.hydrateRoot(
  document.getElementById('root') as HTMLElement,
  <AppContext.Provider value={window.initialData}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AppContext.Provider>
);
