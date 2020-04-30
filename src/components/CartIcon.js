import React from "react";
import { Consumer } from "../context";
import "../CartIcon.css";

const CartIcon = () => {
  return (
    <Consumer>
      {context => (
        <div className="cart-icon">
          <i class="fas fa-shopping-cart"></i>
          <p>My Cart: {context.cartLength}</p>
        </div>
      )}
    </Consumer>
  );
};

export default CartIcon;
