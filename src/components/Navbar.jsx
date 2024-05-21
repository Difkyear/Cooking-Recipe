import React from "react";
import { Link } from "react-router-dom";
// styles
import "./Navbar.css";

export default function Navbar() {
  return (
    <div>
      <nav className="navbar">
        <Link to="/">
          <h1>Cooking Ninjia</h1>
        </Link>
        <Link to="/Create">Create</Link>
      </nav>
    </div>
  );
}
