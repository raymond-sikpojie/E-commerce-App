import React from "react";
import Products from "./Products";
import "../Home.css";
import { NavLink } from "react-router-dom";
const Home = () => {
  return (
    <div className="home-main">
      <div className="first-row">
        {/* <h2 className="heading">Good Phones, Great Prices</h2> */}
        <NavLink to="/products">
          <button className="shop-btn">SHOP NOW</button>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
