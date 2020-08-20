import React, { Component, isValidElement } from "react";

const PhoneContext = React.createContext();

export const Consumer = PhoneContext.Consumer;
export class Provider extends Component {
  state = {
    phones: [
      {
        name: "iphone 11",
        price: 150000,
        description:
          "The iPhone 11 offers superb cameras, fast performance and excellent battery life for an affordable price",
        imageUrl:
          "https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/iPhone11_aag97k.jpg",
        imageDescription: "iphone 11",
        itemId: 1 + Math.random(),
      },
      {
        name: "iphone X",
        price: 120000,
        description:
          "The iPhone XR delivers fast performance, great cameras and longer battery life than other flagship phones, all in a colorful and affordable package.",
        imageUrl:
          "https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/iPhoneX_tlgr09.jpg",
        imageDescription: "iphone X",
        id: 1 + Math.random(),
      },
      {
        name: "Samsung galaxy s10e",
        price: 160000,
        description:
          "The Samsung Galaxy S10e packs great performance and a vivid display into a compact design for an affordable price",
        imageUrl:
          "https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/samsung_galaxy_s10_lobsdd.jpg",
        imageDescription: "Galaxy s10e",
        id: 1 + Math.random(),
      },
      {
        name: "Huawei p30 pro",
        price: 80000,
        description:
          "Armed with a quartet of cameras and seriously innovative software, the Huawei P30 Pro is the best thing to happen to mobile photography yet. It's a pretty awesome phone, too.",
        imageUrl:
          "https://res.cloudinary.com/ds57wvvno/image/upload/v1583920183/huawei_p30_pro_gvolr1.jpg",
        imageDescription: "Huawei p30",
        id: 1 + Math.random(),
      },
      {
        name: "Samsung galaxy s20",
        price: 205000,
        description:
          "The Samsung Galaxy S20 is a powerful flagship phone with a smooth 120Hz display, 5G and advanced cameras in a compact design",
        imageUrl:
          "https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/samsung_galaxy_s11_wdxu6k.jpg",

        imageDescription: "galaxy s20",
        id: 1 + Math.random(),
      },
      {
        name: "Motorola Razr",
        price: 320000,
        description:
          "The Razr 2019 is a phone brimming with nostalgia and this is both a positive and a negative",
        imageUrl:
          "https://res.cloudinary.com/ds57wvvno/image/upload/v1597920796/motorola-razr-2019-1-500x500_tm5e6q.jpg",

        imageDescription: "motorola razr",
        id: 1 + Math.random(),
      },
    ],
    cart: [],
    totalCartPrice: [],
    sumOfCartPrice: 0,
    cartLength: 0,
    itemCounterArray: [],
    itemCounterValue: "",
    searchFilter: [],
  };

  testing = () => {
    //console.log(this.state.cart);
    // console.log(this.state.itemCounterArray);
    console.log(this.state.searchFilter);
  };

  updateTotalCartPrice = () => {
    let cartPrice = [...this.state.totalCartPrice];
    this.state.cart.map((arr) => {
      let item = arr.price;
      if (this.state.totalCartPrice.includes(item)) {
        return;
      } else {
        cartPrice.push(item);
        return this.setState({
          totalCartPrice: cartPrice,
        });
      }
    });
  };

  sumOfTotalCartPrice = () => {
    let totalPrice = [...this.state.totalCartPrice];
    let sum = totalPrice.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    this.setState({
      sumOfCartPrice: sum,
    });
  };

  updateCartLength = () => {
    this.setState({
      cartLength: this.state.cart.length,
    });
  };

  updateItemCounter = (id) => {
    const findIndex = this.state.cart.findIndex((arr) => {
      return arr.id === id;
    });

    let itemCounterArray = [...this.state.itemCounterArray];
    itemCounterArray.push(this.state.cart[findIndex]);
    this.setState({
      itemCounterValue: itemCounterArray.length,
    });
  };

  addToCart = (itemId) => {
    const findIndex = this.state.phones.findIndex((arr) => {
      return arr.id === itemId;
    });

    let newCart = [...this.state.cart];
    // This condition below prevents an item from being added to cart more than once.
    if (this.state.cart.includes(this.state.phones[findIndex])) {
      return;
    } else {
      newCart.push(this.state.phones[findIndex]);
      this.setState({
        cart: newCart,
      });
      // Make updateCartLength, updateTotalCartPrice and sumOfTotalCartPrice asynchronuos so as make time for the item object to be pushed to cart.
      setTimeout(this.updateCartLength, 0);
      setTimeout(this.updateTotalCartPrice, 0);
      setTimeout(this.sumOfTotalCartPrice, 0);

      // Update the counter for how many units of an item are in the cart.
      let itemCounterArray = [...this.state.itemCounterArray];
      itemCounterArray.push(this.state.phones[findIndex]);
      this.setState({
        itemCounterValue: 1,
      });
    }
  };

  // Find the index of the item in cart whose price matches the
  // price of the selected (clicked) item.
  // Then, use the index to find the price of the item in cart.
  // Push the it's price to the totalCartPrice array.

  incrementCartItem = (itemId, itemPrice) => {
    let findIndex = this.state.cart.findIndex((val) => {
      return val.price === itemPrice;
    });

    let cartItemPrice = this.state.cart[findIndex].price;
    let totalCartPrice = [...this.state.totalCartPrice];
    totalCartPrice.push(cartItemPrice);

    this.setState({
      totalCartPrice: totalCartPrice,
    });
    // Update sum of the totalCartPrice
    setTimeout(this.sumOfTotalCartPrice, 0);

    // Increment the counter

    let itemCounterArray = [...this.state.itemCounterArray];
    if (findIndex) {
      itemCounterArray.push(this.state.cart[findIndex]);
      this.setState({
        itemCounterArray: itemCounterArray,
      });
    }

    // setTimeout(this.increment(itemId), 0);

    //this.updateItemCounter(itemId);
  };

  // increment = id => {
  //   let itemCounterArray = [...this.state.itemCounterArray];
  //   itemCounterArray.push(this.state.cart[id]);
  //   this.setState({
  //     itemCounterArray: itemCounterArray
  //   });
  // };

  // Firstly, find the index of the price value in the totalCartPrice array
  // that matches the price of the selected (clicked) item in the cart.

  // Secondly, declare a variable - itemMatch, which returns true
  // if the price value in the totalCartPrice array matches the
  // price of the selected (clicked) item in the cart, and returns false otherwise.

  // Thirdly, in order to ensure that there is always one unit of the item in the cart,
  // create a filteredItemArray variable which returns an array of filtered item and
  // set a conditional to only delete when it's length is above 1.

  decrementCartItem = (itemId, itemPrice) => {
    let totalCartPrice = [...this.state.totalCartPrice];

    let itemMatch;
    let priceIndex = totalCartPrice.findIndex((val) => {
      return (itemMatch = val === itemPrice);
    });

    let filteredItemArray = totalCartPrice.filter((val) => {
      return val === itemPrice;
    });

    // If the price in toatalCartPrice mathes the price of the clicked item,
    // and the item contains more than one unit,it's price value is removed from the array.

    if (itemMatch === true && filteredItemArray.length > 1) {
      totalCartPrice.splice(priceIndex, 1);
    }

    this.setState({
      totalCartPrice: totalCartPrice,
    });

    //console.log(priceIndex);
    //Update sum of the totalCartPrice
    setTimeout(this.sumOfTotalCartPrice, 0);
  };

  // itemCounter = () => {

  // }

  removeItemHandler = (itemId, itemPrice) => {
    let itemMatch;
    let findIndex = this.state.cart.findIndex((val) => {
      return (itemMatch = val.id === itemId);
    });

    let cart = [...this.state.cart];

    if (itemMatch) {
      cart.splice(findIndex, 1);
    }

    this.setState({
      cart: cart,
    });

    //Update cart length and total price
    setTimeout(this.updateCartLength, 0);

    let totalPrice = [...this.state.totalCartPrice];

    let itemPriceMatch;
    let priceIndex = this.state.totalCartPrice.findIndex((val) => {
      return (itemPriceMatch = val === itemPrice);
    });

    // Filter the price in cart that is not equal to the price of the selected
    // item inteded to be removed. Delete everything in the total cart price array using splice,
    // then copy the filtered items back into the array using array.spread() method.
    let priceFilter = this.state.totalCartPrice.filter((val) => {
      return val !== itemPrice;
    });

    totalPrice.splice(priceIndex);

    totalPrice = [...priceFilter];

    console.log(priceFilter);

    this.setState({
      totalCartPrice: totalPrice,
    });

    setTimeout(this.sumOfTotalCartPrice, 0);

    // Update the itemCounterArray
  };

  // Write a conditional which only updates state when input value is not empty
  searchHandler = (e) => {
    let filtered;
    if (e.target.value !== "") {
      filtered = this.state.phones.filter((val) => {
        return val.name.toLowerCase().includes(e.target.value.toLowerCase());
      });
      this.setState({
        searchFilter: filtered,
      });
    } else {
      this.setState({
        searchFilter: [],
      });
    }
  };

  render() {
    return (
      <PhoneContext.Provider
        value={{
          phones: this.state.phones,
          testing: this.testing,
          cart: this.state.cart,
          totalCartPrice: this.state.totalCartPrice,
          sumOfCartPrice: this.state.sumOfCartPrice,
          sumOfTotalCartPrice: this.sumOfTotalCartPrice,
          cartLength: this.state.cartLength,
          updateTotalCartPrice: this.updateTotalCartPrice,
          addToCart: this.addToCart,
          incrementCartItem: this.incrementCartItem,
          decrementCartItem: this.decrementCartItem,
          itemCounterArray: this.state.itemCounterArray,
          itemCounterValue: this.state.itemCounterValue,
          removeItemHandler: this.removeItemHandler,
          searchHandler: this.searchHandler,
          searchFilter: this.state.searchFilter,
        }}
      >
        {this.props.children}
      </PhoneContext.Provider>
    );
  }
}
