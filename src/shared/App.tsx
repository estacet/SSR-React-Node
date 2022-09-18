import React from 'react';
import { Link } from "react-router-dom";
import { GetRoutes } from "../routes";
import { Header } from "../components/Header/Header";

export const App: React.FC = () => {
  return (
    <div className={"container"}>
      <Header />
      {/*<div className="list">*/}
      {/*  <ul>*/}
      {/*    <li><Link to="/">Home</Link></li>*/}
      {/*    <li><Link to="/cards">Cards</Link></li>*/}
      {/*  </ul>*/}
      {/*</div>*/}
      <GetRoutes />
    </div>
  );
}

