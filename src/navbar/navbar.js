import React from "react";
import './navbar.css'
import { Link } from 'react-router-dom'
import logo from  '../env/logo192.png'
export default function Navbar() {
  return (
    <div className="container">
       <img alt="logo" src={logo} width="50"  height="50" />
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
