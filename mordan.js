// Import module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing module');
// console.log(shippingCost);

// import shoppingCart, * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(shoppingCart.totaPrice);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price)

// import add, { cart } from './shoppingCart.js';
// add('pizza', 2);
// add('bread', 5);
// add('apples', 4);

// console.log(cart);

// const shoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 237;
//   const totalQuantity = 23;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(
//       `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//     );
//   };

//   const orderStock = function (product, quantity) {
//     console.log(`${quantity} ${product} ordered from supplier`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQuantity,
//   };
// })();

// shoppingCart2.addToCart('apple', 4);
// shoppingCart2.addToCart('pizza', 2);
// console.log(shoppingCart2);

// // Export
// export.addToCart = function (product, quantity) {
//         cart.push({ product, quantity });
//         console.log(
//           `${quantity} ${product} added to cart (sipping cost is ${shippingCost})`
//          );
//       };

//       // Import
//       const {addToCart} = require('./shoppingCart.js')

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';
// import cloneDeep from '.lodash-es';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'pizza', quantity: 5 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign({}, state);
const stateCloneDeep = cloneDeep(state);

state.user.loggedIn = false;
console.log(stateClone);

console.log(stateCloneDeep);

// if (module.hot) {
//   module.hot.accept();
// }

class Person {
  greetings = 'Hey';
  constructor(name) {
    this.name = name;
    console.log(`${this.greetings}, ${this.name}`);
  }
}

const abiola = new Person('abiola');

console.log('abiola' ?? null);

console.log(cart.fing(el => el.quantity >= 2));
Promise.resolve('TEST').then(x => console.log(x));

import 'core-js/stable';
// import 'core-js/stable/array/find';
// import 'core-js/stable/promise';

// polifilling async function
import 'regenerator-runtime/runtime';
