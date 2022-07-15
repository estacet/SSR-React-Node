import React from 'react';
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import { GetRoutes } from "./routes";
import {Cards} from "./pages/Cards";
import {Home} from "./pages/Home";
import {Card} from "./pages/UniqueCard";

export const App: React.FC = () => {
  return (
    <>
      <BrowserRouter>
        {/*<Routes>*/}
        {/*  <Route path={"/"} element={<Home />}/>*/}
        {/*  <Route path={"/cards"} element={<Cards />}/>*/}
        {/*  <Route path={"cards/:id"} element={<Card />} />*/}
        {/*</Routes>*/}
        <GetRoutes />
      </BrowserRouter>
    </>
  );
}

