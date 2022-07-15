import React from "react";
import { Link } from "react-router-dom";

export const Home: React.FC = () => {
  return (
    <>
      <div>Home page</div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/cards">Cards</Link>
        <Link to="cards/:id">Unique</Link>
      </nav>
    </>
  );
}