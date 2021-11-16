import React from "react";
import './navbar.css'
export default function Navbar() {
  return (
    <div className="container">
      <nav>
        <ul>
          <a className="links" href="/Home">Home</a>
          <a className="links" href="/About">About</a>
          <a className="links" href="/Products">Products</a>
        </ul>
      </nav>
    </div>
  );
}
