'use strict';

///////////////// EXAMPLE OF CLOSURES ////////////////
// let f;

// const g = function () {
//   const a = 23;
//   f = function () {
//     console.log(a * 2);
//   }
// };

// const h = function () {
//   const b = 777;
//   f = function () {
//     console.log(b * 2);
//   }
// }

// g();
// f();
// console.dir(f)
// //
// h();
// f();
// console.dir(h);

// // Example 2
// const boardPassangers = function (n, wait) {
//   const perGroup = n / 3;

//   setTimeout (function () {
//     console.log(`We are now boarding all ${n} passangers`);
//     console.log(`There are 3 groups, each with ${perGroup} passngers`);
//   }, wait * 1000);

//   console.log(`Will start boarding in ${wait} seconds`);
  
// }
// const perGroup = 1000;

// boardPassangers(180, 3);


////////////////// CODING CHALLENGE /////////////////////
// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', function () {
//     header.style.color = 'blue'
//   });
// })();



///////////////  CLOSURS ///////////////////////

// const secureBooking = function () {
//   let passangerCount = 0;

//   return function () {
//     passangerCount++;
//     console.log(`${passangerCount} passangers`);
//   }
// };

// const booker = secureBooking();

// booker();
// booker();
// booker();

// console.dir(booker);




// ///// IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIEF)
// const runOnce = function () {
//   console.log('This will never run again');
  
// };
// runOnce();

// /// IIFE
//  (function () {
//   console.log('This will never run again');
//   const isPrivate = 23;
// })();

// (() => console.log('This will ALSO never run again'))();

// {
//   const isPrivate = 23;
//   var  notPrivate = 46;
// };
// // console.log(isPrivate);
// console.log(notPrivate);



// /////////////// CODING CHALLENGE
// const poll = {
//     question: 'What is your favourite programming language?',
//     option: ['0: javaScript', '1: Python', '2: Rust', '3: C++'],
//     // This generates[0,0,0,0] more in the next section
//     answers: new Array(4).fill(0),
//     registerNewAnswer() {
//         // Get answer
//       const answer = Number (prompt(`${this.question}\n${this.option.join('\n')}\n(write option number)`))
//       console.log(answer);

//       // Register answer
//       typeof answer === "number" && answer < this.answers.length && this.answers[answer]++;

//       // console.log(this.answers);
//       this.displayResult();
//       this.displayResult('string');
//      },
//        displayResult(type = 'array') {
//         if(type === 'array') {
//           console.log(this.answers);
//         } else if(type === 'string') {
//           // poll results are 13, 2, 4, 1
//           console.log(`Poll results are ${this.answers.join(', ')}`)
//         }
//        }
//     }


// document
// .querySelector('.poll')
// .addEventListener('click', poll
//   .registerNewAnswer.bind(poll));

//   poll.displayResult.call({answers: [5, 2, 3]},'string');
//     poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]},'string');
//     poll.displayResult.call({answers: [1, 5, 3, 9, 6, 1]});

// [5, 2, 3]
// [1, 5, 3, 9, 6, 1]


///////////// THE CALL AND APPLY METHODS //////////////////

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
//     // book: function () {}
//     book(flightnNum, name) {
//         console.log(`${name} book a seat on ${this.airline} flight${this.iataCode} ${flightnNum}`);
//         this.bookings.push({ flight: `${this.iataCode}${flightnNum}`, name})
//     }
    
// };

// lufthansa.book(339, 'Lawal Abiola');
// lufthansa.book(115, 'Jonas Schemedtmann');



// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: [],
// }

// const book = lufthansa.book

// Does Not Work
// book(23, 'Sara Williams');

// // call method
// book.call(eurowings, 23, 'Sara Williams');
// console.log(eurowings);

// book.call(lufthansa, 339, 'Adisa Bossweb');
// console.log(lufthansa);


// const swiss = {
//     airline: 'Lufthansa',
//     iataCode: 'LX',
//     bookings: [],
// };

// book.call(swiss, 583, 'BossWeb SeniorMan');


// // Apply Method
// const flightData = [583, 'George Cooper'];
// book.apply(swiss, flightData);
// console.log(swiss);

// book.call(swiss, ...flightData);

// // Bind method 
// // book.bind(eurowings, 23, 'Sara Williams');

// const bookEW = book.bind(eurowings);
// const bookLH = book.bind(lufthansa);
// const bookLX = book.bind(swiss)

// bookEW(23, 'Steven Williams');

// const bookEW23 = book.bind(eurowings, 23);
// bookEW23('Lawal Abiola');
// bookEW23('Jonas Schmedtmann');

// // With event Listener
// lufthansa.planes = 300;
// lufthansa.buyPlane = function() {
//     console.log(this);

//     this.planes++;
//     console.log(this.planes); 
// };
// // lufthansa.buyPlane();

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// // partial Application
// const addTax = (rate, value) => value + value * rate;
// console.log(addTax(0.1, 200));

// const addVAT = addTax.bind(null, 0.23);
// // addVAT = value => value + value * 0.23
// console.log(addVAT(100));
// console.log(addVAT(23));

// const addTaxRate = function(rate) {
//     return function(value) {
//         return value + value * rate;
//     }
// };

// const addVAT2 = addTaxRate(0.23);
// console.log(addVAT2(100));
// console.log(addVAT2(23));









///////////////////////// FUNCTION RETURNING FUNCTION ///////////////////////////
// const greet = function (greeting) {
//     return function(name) {
//         console.log(`${greeting} ${name}`);
//     }
// };

// const greaterHey = greet ('Hey') 
// greaterHey('Abiola');
// greaterHey('Lawal');

// greet('Hellow') ('Abiola');


// const greetArr = greeting =>  name => console.log(`${greeting} ${name}`);

// greetArr('Hi') ('Abiola');






////////////////// CALL BACK FUNCTION ////////////////////////////////

// const oneWord = function(str) {
//     return str.replace(/ /g, '').toLowerCase();
// };

// const upperFirstWord = function(str) {
//     const [first, ...others] = str.split(' ');
//     return [first.toUpperCase(), ...others].join(' ');
// };

// // Higher-Order function 
// const transformer = function(str, fn) {
//     console.log(`Original string: ${str}`);
//     console.log(`Transformed string: ${fn(str)}`);
//     console.log(`Transformed by: ${fn.name}`)
// };

// transformer('Javascript is the best!', upperFirstWord);
// transformer('Javascript is the best!', oneWord);


// // JS call back all the time
// const high5 = function () {
//     console.log('👋');  
// };

// document.body.addEventListener('click', high5);
// ['Abiola','Lawal', 'Jonas'].forEach(high5)



// //////// HOW PASSING ARGUMENTS WORKS VALUE VS. REFERENCE
// const flight = 'LH234';

// const  abiola = {
//     name: 'Lawal Abiola',
//     passport: 1234567890
// }

// const checkIn = function(flightnNum, passanger) {
//     flightnNum = 'LH999';
//     passanger.name = 'Mr. ' + passanger.name;

//     if (passanger.passport === 1234567890) {
//         alert('Checked in');
//     } else {
//         alert('Wrong passport!')
//     }
// }

// // checkIn (flight, abiola);
// // console.log(flight);
// // console.log(abiola);

// // // is the same as doing...
// // const flightnNum = flight;
// // const passanger = abiola;

// const newPassport = function (person) {
//     person.passport = Math.trunc(Math.random() * 100000000000)
// }

// newPassport(abiola);
// checkIn(flight, abiola);






// ////////////////////////// DEFAULT PARAMETER //////////////////////////////////////
// const bookings = [];

// const createBooking = function (flightnNum, numPassanger = 1, price = 199 * numPassanger)  {

//     // ES5
//     //   numPassanger = numPassanger || 1;
//     //   price = price || 199;


//     const booking = {
//         flightnNum,
//         numPassanger,
//         price,
//     }
//     console.log(booking);
//     bookings.push(booking);
// }

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH123', 2);
// createBooking('LH123', 5);

// createBooking('LH123', undefined, 1000);