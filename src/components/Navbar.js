import React from "react";
import "../Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <NavLink className="title-link" to="/">
        <p className="title">PHONE MART</p>
      </NavLink>

      <div className="navbar">
        <NavLink className="link" exact to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/products">
          Products
        </NavLink>
        <NavLink className="link" to="/cart">
          Cart
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
