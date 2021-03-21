import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navigation">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/game">Game</Link>
        </li>
        <li>
          <Link to="/statistic">Statistic</Link>
        </li>
      </ul>
    </nav>
  );
}
