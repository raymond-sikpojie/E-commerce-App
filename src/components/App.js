import React from "react";
import { Consumer } from "../context";
import "../Products.css";
import Products from "./Products";
import Home from "./Home";
import Cart from "./Cart";
import Navbar from "./Navbar";
import Footer from "./Footer";
import CartIcon from "./CartIcon";
import { BrowserRouter, Route, NavLink } from "react-router-dom";
import "../App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Consumer>
        {(context) => (
          <div>
            <Navbar />

            {/* <button onClick={context.testing}>Test</button> */}

            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/cart" component={Cart} />
            {/* <Cart /> */}
            <Products />
            <Footer />
          </div>
        )}
      </Consumer>
    </BrowserRouter>
  );
};

export default App;
