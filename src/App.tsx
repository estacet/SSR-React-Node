import React from 'react';
import { Link } from "react-router-dom";
import { GetRoutes } from "./routes";

export const App: React.FC = () => {
  return (
    <div>
      Hello
      <div className="list">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cards">Cards</Link></li>
          <li><Link to="/testCards">TestCards</Link></li>
        </ul>
      </div>
      <GetRoutes />
    </div>
  );
}

