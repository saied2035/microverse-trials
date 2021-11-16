import React from "react";
import './navbar.css'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="container">
      <nav>
          <ol className="constainer">
              <Link className="link" to="/">Home</Link>
              <Link className="link" to="/about">About</Link>
              <Link className="link" to="/products">Products</Link>
          </ol>
      </nav>
    </div>
  );
}
