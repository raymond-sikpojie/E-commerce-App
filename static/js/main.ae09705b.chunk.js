(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{14:function(e,t,a){},24:function(e,t,a){e.exports=a(40)},29:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),c=a(16),i=a.n(c),s=a(4),o=a(17),l=a(18),m=a(22),u=a(19),d=a(23),p=n.a.createContext(),h=p.Consumer,f=function(e){function t(){var e,a;Object(o.a)(this,t);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(a=Object(m.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={phones:[{name:"iphone 11",price:15e4,description:"The iPhone 11 offers superb cameras, fast performance and excellent battery life for an affordable price",imageUrl:"https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/iPhone11_aag97k.jpg",imageDescription:"iphone 11",itemId:1+Math.random()},{name:"iphone X",price:12e4,description:"The iPhone XR delivers fast performance, great cameras and longer battery life than other flagship phones, all in a colorful and affordable package.",imageUrl:"https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/iPhoneX_tlgr09.jpg",imageDescription:"iphone X",id:1+Math.random()},{name:"Samsung galaxy s10e",price:16e4,description:"The Samsung Galaxy S10e packs great performance and a vivid display into a compact design for an affordable price",imageUrl:"https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/samsung_galaxy_s10_lobsdd.jpg",imageDescription:"Galaxy s10e",id:1+Math.random()},{name:"Huawei p30 pro",price:8e4,description:"Armed with a quartet of cameras and seriously innovative software, the Huawei P30 Pro is the best thing to happen to mobile photography yet. It's a pretty awesome phone, too.",imageUrl:"https://res.cloudinary.com/ds57wvvno/image/upload/v1583920183/huawei_p30_pro_gvolr1.jpg",imageDescription:"Huawei p30",id:1+Math.random()},{name:"Samsung galaxy s20",price:205e3,description:"The Samsung Galaxy S20 is a powerful flagship phone with a smooth 120Hz display, 5G and advanced cameras in a compact design",imageUrl:"https://res.cloudinary.com/ds57wvvno/image/upload/v1583920182/samsung_galaxy_s11_wdxu6k.jpg",imageDescription:"galaxy s20",id:1+Math.random()},{name:"Motorola Razr",price:32e4,description:"The Razr 2019 is a phone brimming with nostalgia and this is both a positive and a negative",imageUrl:"https://res.cloudinary.com/ds57wvvno/image/upload/v1597920796/motorola-razr-2019-1-500x500_tm5e6q.jpg",imageDescription:"motorola razr",id:1+Math.random()}],cart:[],totalCartPrice:[],sumOfCartPrice:0,cartLength:0,itemCounterArray:[],itemCounterValue:"",searchFilter:[]},a.testing=function(){console.log(a.state.searchFilter)},a.updateTotalCartPrice=function(){var e=Object(s.a)(a.state.totalCartPrice);a.state.cart.map((function(t){var r=t.price;return a.state.totalCartPrice.includes(r)?void 0:(e.push(r),a.setState({totalCartPrice:e}))}))},a.sumOfTotalCartPrice=function(){var e=Object(s.a)(a.state.totalCartPrice).reduce((function(e,t){return e+t}),0);a.setState({sumOfCartPrice:e})},a.updateCartLength=function(){a.setState({cartLength:a.state.cart.length})},a.updateItemCounter=function(e){var t=a.state.cart.findIndex((function(t){return t.id===e})),r=Object(s.a)(a.state.itemCounterArray);r.push(a.state.cart[t]),a.setState({itemCounterValue:r.length})},a.addToCart=function(e){var t=a.state.phones.findIndex((function(t){return t.id===e})),r=Object(s.a)(a.state.cart);a.state.cart.includes(a.state.phones[t])||(r.push(a.state.phones[t]),a.setState({cart:r}),setTimeout(a.updateCartLength,0),setTimeout(a.updateTotalCartPrice,0),setTimeout(a.sumOfTotalCartPrice,0),Object(s.a)(a.state.itemCounterArray).push(a.state.phones[t]),a.setState({itemCounterValue:1}))},a.incrementCartItem=function(e,t){var r=a.state.cart.findIndex((function(e){return e.price===t})),n=a.state.cart[r].price,c=Object(s.a)(a.state.totalCartPrice);c.push(n),a.setState({totalCartPrice:c}),setTimeout(a.sumOfTotalCartPrice,0);var i=Object(s.a)(a.state.itemCounterArray);r&&(i.push(a.state.cart[r]),a.setState({itemCounterArray:i}))},a.decrementCartItem=function(e,t){var r,n=Object(s.a)(a.state.totalCartPrice),c=n.findIndex((function(e){return r=e===t})),i=n.filter((function(e){return e===t}));!0===r&&i.length>1&&n.splice(c,1),a.setState({totalCartPrice:n}),setTimeout(a.sumOfTotalCartPrice,0)},a.removeItemHandler=function(e,t){var r,n=a.state.cart.findIndex((function(t){return r=t.id===e})),c=Object(s.a)(a.state.cart);r&&c.splice(n,1),a.setState({cart:c}),setTimeout(a.updateCartLength,0);var i=Object(s.a)(a.state.totalCartPrice),o=a.state.totalCartPrice.findIndex((function(e){return e===t})),l=a.state.totalCartPrice.filter((function(e){return e!==t}));i.splice(o),i=Object(s.a)(l),console.log(l),a.setState({totalCartPrice:i}),setTimeout(a.sumOfTotalCartPrice,0)},a.searchHandler=function(e){var t;""!==e.target.value?(t=a.state.phones.filter((function(t){return t.name.toLowerCase().includes(e.target.value.toLowerCase())})),a.setState({searchFilter:t})):a.setState({searchFilter:[]})},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement(p.Provider,{value:{phones:this.state.phones,testing:this.testing,cart:this.state.cart,totalCartPrice:this.state.totalCartPrice,sumOfCartPrice:this.state.sumOfCartPrice,sumOfTotalCartPrice:this.sumOfTotalCartPrice,cartLength:this.state.cartLength,updateTotalCartPrice:this.updateTotalCartPrice,addToCart:this.addToCart,incrementCartItem:this.incrementCartItem,decrementCartItem:this.decrementCartItem,itemCounterArray:this.state.itemCounterArray,itemCounterValue:this.state.itemCounterValue,removeItemHandler:this.removeItemHandler,searchHandler:this.searchHandler,searchFilter:this.state.searchFilter}},this.props.children)}}]),t}(r.Component),g=(a(14),a(5)),v=(a(29),function(){return n.a.createElement(h,null,(function(e){return n.a.createElement("div",{className:"cart-icon"},n.a.createElement("i",{class:"fas fa-shopping-cart"}),n.a.createElement("p",null,"My Cart: ",e.cartLength))}))}),C=function(){return n.a.createElement(h,null,(function(e){return n.a.createElement("div",{className:"products-main"},n.a.createElement("div",{className:"searchbar-cart"},n.a.createElement("input",{type:"text",placeholder:"Search phones",onChange:e.searchHandler}),n.a.createElement(g.b,{className:"cart-icon-link",to:"/cart"},n.a.createElement(v,null))),n.a.createElement("div",{className:"display-card-main"},0!==e.searchFilter.length?e.searchFilter.map((function(t){return n.a.createElement("div",{className:"display-card",key:1+Math.random()},n.a.createElement("p",{className:"product-name"},t.name),n.a.createElement("div",{className:"image-div"},n.a.createElement("img",{src:t.imageUrl,alt:t.imageDescription})),n.a.createElement("div",{className:"text-div"},n.a.createElement("p",{className:"product-price"},"\u20a6",t.price),n.a.createElement("button",{className:"btn-cart",onClick:function(){return e.addToCart(t.id)}},"Add to Cart")))})):e.phones.map((function(t){return n.a.createElement("div",{className:"display-card",key:1+Math.random()},n.a.createElement("p",{className:"product-name"},t.name),n.a.createElement("div",{className:"image-div"},n.a.createElement("img",{src:t.imageUrl,alt:t.imageDescription})),n.a.createElement("div",{className:"text-div"},n.a.createElement("p",{className:"product-price"},"\u20a6",t.price),n.a.createElement("button",{className:"btn-cart",onClick:function(){return e.addToCart(t.id)}},"Add to Cart")))}))))}))},E=(a(35),function(){return n.a.createElement("div",{className:"home-main"},n.a.createElement("div",{className:"first-row"},n.a.createElement(g.b,{to:"/products"},n.a.createElement("button",{className:"shop-btn"},"SHOP NOW"))))}),b=(a(36),function(){return n.a.createElement(h,null,(function(e){return n.a.createElement("div",{className:"cart-main"},0===e.cart.length?n.a.createElement("div",{className:"cart-empty-msg"},n.a.createElement("i",{class:"fas fa-dolly"}),n.a.createElement("h1",null,"Your Cart is Empty")):n.a.createElement("div",{className:"cart-main-secondary"},n.a.createElement("div",{className:"cart-component"},n.a.createElement(v,null)),n.a.createElement("div",{className:"cart-div-main"},n.a.createElement("h2",{className:"cart-heading"},"Cart Total: \u20a6",e.sumOfCartPrice),e.cart.map((function(t){return n.a.createElement("div",{className:"cart-div",key:1+Math.random()},n.a.createElement("div",{className:"img-div"},n.a.createElement("img",{src:t.imageUrl,alt:t.imageDescription})),n.a.createElement("div",{className:"text-div"},n.a.createElement("p",null,t.name),n.a.createElement("p",{className:"cart-price"},"\u20a6",t.price)),n.a.createElement("div",{className:"controls"},n.a.createElement("button",{onClick:function(){return e.decrementCartItem(t.id,t.price)}},"-"),n.a.createElement("p",null,e.itemCounterArray.length),n.a.createElement("button",{onClick:function(){return e.incrementCartItem(t.id,t.price)}},"+"),n.a.createElement("div",{className:"delete-icon"},n.a.createElement("i",{onClick:function(){return e.removeItemHandler(t.id,t.price)},className:"fas fa-trash-alt"}))))})))))}))}),y=(a(37),function(){return n.a.createElement("div",{className:"navbar-main"},n.a.createElement(g.b,{className:"title-link",to:"/"},n.a.createElement("p",{className:"title"},"PHONE MART")),n.a.createElement("div",{className:"navbar"},n.a.createElement(g.b,{className:"link",exact:!0,to:"/"},"Home"),n.a.createElement(g.b,{className:"link",to:"/products"},"Products"),n.a.createElement(g.b,{className:"link",to:"/cart"},"Cart")))}),N=(a(38),function(){return n.a.createElement("div",{className:"footer-main"},n.a.createElement("p",{className:"heading"},"Created by Omogbare Sikpojie"),n.a.createElement("p",{className:"year"}," \xa9 2020"))}),P=a(7),O=(a(39),function(){return n.a.createElement(g.a,null,n.a.createElement(h,null,(function(e){return n.a.createElement("div",null,n.a.createElement(y,null),n.a.createElement(P.a,{path:"/E-commerce-App",component:E}),n.a.createElement(P.a,{exact:!0,path:"/",component:E}),n.a.createElement(P.a,{path:"/products",component:C}),n.a.createElement(P.a,{path:"/cart",component:b}),n.a.createElement(N,null))})))});i.a.render(n.a.createElement(f,null,n.a.createElement(O,null)),document.querySelector("#root"))}},[[24,1,2]]]);
//# sourceMappingURL=main.ae09705b.chunk.js.map