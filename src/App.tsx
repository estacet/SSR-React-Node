import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { GetRoutes } from "./routes";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        <GetRoutes />
      </BrowserRouter>
    </>
  );
}

