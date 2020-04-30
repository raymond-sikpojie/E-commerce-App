import React from "react";
import { Consumer } from "../context";
import "../Products.css";
import { NavLink } from "react-router-dom";
import CartIcon from "./CartIcon";

const Products = () => {
  return (
    <Consumer>
      {context => (
        <div className="products-main">
          <div className="searchbar-cart">
            <input
              type="text"
              placeholder="Search phones"
              onChange={context.searchHandler}
            />

            <NavLink className="cart-icon-link" to="/cart">
              {/* <div className="cart-icon">
                <i class="fas fa-shopping-cart"></i>
                <p>My Cart: {context.cartLength}</p>
              </div> */}
              <CartIcon />
            </NavLink>
          </div>

          {/* Show results from searchbar input value using a conditional that 
          returns the value of the searchFilter array */}
          <div className="display-card-main">
            {context.searchFilter.length !== 0
              ? context.searchFilter.map(arr => {
                  return (
                    <div className="display-card" key={1 + Math.random()}>
                      <p className="product-name">{arr.name}</p>
                      <div className="image-div">
                        <img src={arr.imageUrl} alt={arr.imageDescription} />
                      </div>

                      <div className="text-div">
                        <p className="product-price">&#8358;{arr.price}</p>
                        <button
                          className="btn-cart"
                          onClick={() => context.addToCart(arr.id)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })
              : context.phones.map(arr => {
                  return (
                    <div className="display-card" key={1 + Math.random()}>
                      <p className="product-name">{arr.name}</p>
                      <div className="image-div">
                        <img src={arr.imageUrl} alt={arr.imageDescription} />
                      </div>

                      <div className="text-div">
                        <p className="product-price">&#8358;{arr.price}</p>
                        <button
                          className="btn-cart"
                          onClick={() => context.addToCart(arr.id)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </div>
                  );
                })}

            {/* {context.phones.map(arr => {
              return (
                <div className="display-card" key={1 + Math.random()}>
                  <p className="product-name">{arr.name}</p>
                  <div className="image-div">
                    <img src={arr.imageUrl} alt={arr.imageDescription} />
                  </div>

                  <div className="text-div">
                    <p className="product-price">&#8358;{arr.price}</p>
                    <button
                      className="btn-cart"
                      onClick={() => context.addToCart(arr.id)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      )}
    </Consumer>
  );
};

export default Products;
