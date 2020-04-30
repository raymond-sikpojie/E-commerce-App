import React from "react";
import { Consumer } from "../context";
import "../Cart.css";
import CartIcon from "./CartIcon";
const Cart = () => {
  return (
    <Consumer>
      {(context) => (
        <div className="cart-main">
          {/* Write a conditional statement which renders a text when cart is empty */}
          {context.cart.length === 0 ? (
            <div className="cart-empty-msg">
              <i class="fas fa-dolly"></i>
              <h1>Your Cart is Empty</h1>
            </div>
          ) : (
            <div className="cart-main-secondary">
              <div className="cart-component">
                <CartIcon />
              </div>

              <div className="cart-div-main">
                <h2 className="cart-heading">
                  Cart Total: &#8358;{context.sumOfCartPrice}
                </h2>

                {context.cart.map((arr) => {
                  return (
                    <div className="cart-div" key={1 + Math.random()}>
                      <div className="img-div">
                        <img src={arr.imageUrl} alt={arr.imageDescription} />
                      </div>

                      <div className="text-div">
                        <p>{arr.name}</p>

                        <p className="cart-price">&#8358;{arr.price}</p>
                      </div>

                      <div className="controls">
                        <button
                          onClick={() =>
                            context.decrementCartItem(arr.id, arr.price)
                          }
                        >
                          -
                        </button>
                        <p>{context.itemCounterArray.length}</p>

                        <button
                          onClick={() =>
                            context.incrementCartItem(arr.id, arr.price)
                          }
                        >
                          +
                        </button>

                        <div className="delete-icon">
                          <i
                            onClick={() =>
                              context.removeItemHandler(arr.id, arr.price)
                            }
                            className="fas fa-trash-alt"
                          ></i>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      )}
    </Consumer>
  );
};

export default Cart;
