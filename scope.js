// 'use stricts';

// function calcAge(birthYear) {
//     const age = 1991 - birthYear;
    
//      function printAge() {
//         let output = `${firstName} You are ${age}, born in ${birthYear}`
//         console.log(output);

//         if(birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             // Creating NEW variable with same name as outer scope's variable
//             const firstName = 'Steven';

//             // Reassingning outer scopes variable
//             output = 'NEW OUTPUT';
            

//             const str = `Oh,and you are a millenial, ${firstName}`;
//             console.log(str);

//             function add(a, b){
//                 return a + b;
//             }
           
//         }
//         // console.log(str); // cannot work outside the function (use const or let variable in func not var);
//         console.log(millenial);
//         // console.log(add(2,3));
//         console.log(output)
//      }
//       printAge();
//     return age;
// };

// const firstName = 'Jonas';
// calcAge(1991);



// // Variables
// console.log(me);
// // console.log(job);
// // console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// // Function
// console.log(addDecl(2, 3));


// function addDecl(a, b) {
//     return a + b;
// }

// const addExpr = function(a, b) {
//      return a + b;
// }

// var addArrow = (a, b) => a + b;

// // Example

// if(!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart () {
//     console.log('All products deleted!')
// }

// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);



// // this keyword

// // console.log(this);

// const calcAge = function(birthYear) {
//     console.log(2037 - birthYear);
//     // console.log(this);
// }
// calcAge(1991);

// const calcAgeArrow = (birthYear) => {
//     console.log(2037 - birthYear);
//     // console.log(this);
// }
// calcAgeArrow(1980);

// const jonas = {
//      year: 1991,
//      calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//      },
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// }
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// const f = jonas.calcAge;

// var firstName = 'maltida';
// const jonas = {
//     firstName: 'Abiola',
//     year: 1991,
//     calcAge: function () {
//     //    console.log(this);
//        console.log(2037 - this.year);

//      // Solution 1
//     //    const self = this; // self or that
//     //    const isMillenial = function () {
//     //     console.log(self)
//     //     console.log(self.year >= 1981 &&  self.year <= 1996 );
//     //     // console.log(this.year >= 1981 &&  this.year <= 1996 );
//     //    };
       
//        // Solution 2
//        const isMillenial =  () => {
//         console.log(this)
//         console.log(this.year >= 1981 &&  this.year <= 1996 );
//        };
//        isMillenial();
//     },
//     greet: () => {
//         console.log(this)
//         console.log(`Hey ${this.firstName}`)
//     }
//    };
//    jonas.greet();
//     jonas.calcAge();
    

//     // arguements keyword

//     const addExpres = function (a, b) {
//         console.log(arguments)
//          return a + b;
//     }
//      addExpres(2, 5);
//      addExpres(2, 5, 8, 12);


//     var addArrow = (a, b) => {
//     console.log(arguments);
//     return a + b;
//     };
//     addArrow(2, 5, 8)

// let age = 30;

// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//     name: 'Abiola',
//     age: 30,
// }


// const friend = me;
// friend.age = 27;
// console.log('Friend:', friend);
// console.log('Me', me);

// // Primitive types
// let lastName = 'Lawal';
// let oldLastName = lastName;
// lastName = 'Abiola';
// console.log(lastName, oldLastName);

// // Reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
   
// };

// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
// console.log('Before marriage', jessica);
// console.log('After marriage', marriedJessica);
// // marriedJessica = {};

// // Copying object

// const jessica2 = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob'],
// };

// const jessicaCopy = Object.assign({}, jessica2);
// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');



// console.log('Before marriage', jessica2);
// console.log('After marriage', jessicaCopy);



///////////////////   DESTRUCTURING ARRAYS    ////////////////////////////// (9)

'use strict';
const weekdays = ['Mon', 'Tue', 'Wed', 'Thus', 'Fri', 'Sat', 'Sun'];
const  openingHours = {
  [weekdays[3]]: {
      open: 12,
      close: 22,
  },
  [weekdays[4]]: {
      open: 11,
      close: 23,
  },
  [weekdays[5]]: {
      open: 0, // 24 hours;
      close: 12 + 12,
  },
};


const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenzi Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetter', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    // ES6 enanced object Literals
    openingHours,
   
    order(starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
    },
      orderDelivery({starterIndex = 1,  mainIndex = 0, time = '20:00', address}) {
           console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`

           );
           
      },
    orderPasta(ing1, ing2, ing3) {
      console.log(`Here is your deliscious pasta with ${ing1}, ${ing2} and ${ing3}`

      );
      
    },
    orderPizza(mainIgredient, ...otherIngredient) {
      console.log(mainIgredient)
      console.log(otherIngredient);
    },
};



const game = {
  team1: 'Bayern Munich',
  team2: 'Borrusia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandoski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandoski', 'Gnarby', 'Lewandoski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  }
};
// underscore_case  -> underscoreCase
// first_name
// some_variable
// calculate_AGE
// delayed_departure


// ////////////// CODING CHALLENGE ////////////////////
// document.body.append(document.createElement('textarea'));
// document.body.append(document.createElement('button'));



// document.querySelector('button').addEventListener('click', function(){
//   const text = document.querySelector('textarea').value;
//   const rows = text.split('\n')
//   console.log(rows);

//   for( const [i, row] of rows.entries()) {
    
//     const [first, second] = row.toLowerCase().trim().split('_');
//     const output = `${first}${second.replace(second[0], second[0].toUpperCase())}`
//     console.log(`${output.padEnd(20)}${'🆗'.repeat(i + 1)}`);
//   }
// });








// //////////////////////  Working with spring ////////////////////////////////
// console.log('a+very+nice+string'.split('+'));
// console.log('Lawal Abiola'.split(' '));

// const [firstName, lastName] = 'Lawal Abiola'.split(' ');

// const newName = ['Mr.', firstName, lastName.toUpperCase()].join('-');
// console.log(newName);


// const capitalizeName = function (name) {
//   const names = name.split(' ');
//   const namesUpper = [];

//   for(const n of names) {
//   //  namesUpper.push(n[0].toUpperCase() + n.slice(1));
//   namesUpper.push(n.replace(n[0], n[0].toUpperCase()))
//   }
//   console.log(namesUpper.join(' '));
  
// }
// capitalizeName('jessica ann smith davis');
// capitalizeName('lawal abiola')


// /// Padding
// const message = 'Go to gate 23!';
// console.log(message.padStart(20, '+').padEnd(30, '+'));
// console.log('Abiola'.padStart(20, '+').padEnd(30, '+'));

// const maskCreditCard = function(number) {
//   const str = number + '';
//   const last = str.slice(-4);
//   return last.padStart(str.length, '*')
// }

// console.log(maskCreditCard(556454657));
// console.log(maskCreditCard(7544545336775878788));
// console.log(maskCreditCard('757564687698790785765768'));

// const message2 = 'Bad weather... All Departues Delayed';
// console.log(message2.repeat(5));

// const planesInLine = function (n) {
//   console.log(`There are ${n} planes in line ${'✈'.repeat(n)}`);
  
// };
// planesInLine(5);
// planesInLine(3);
// planesInLine(12);



// ///////////////// Working with spring part 2 ///////////////////////////////////////


// const airline = 'TAP Air Portugal';

// console.log(airline.toLowerCase());
// console.log(airline.toUpperCase());

// // Fixed capitalization in name
// const passanger = "jOnAS"; //Jonas
// const passangerLower = passanger.toLowerCase();
// const passangerCorrect = passangerLower[0].toUpperCase() + passangerLower.slice(1);
// console.log(passangerCorrect);


// // Comparing Email
// const email = 'hello@abiola.io';
// const loginEmail = '  Hello@Abiola.Io \n';

// // const lowerEmail = loginEmail.toLowerCase();
// // const trimmedEmail = lowerEmail.trim();
// // console.log(trimmedEmail);

// // Simple way of the upper loginEmail
// const normalizeEmail = loginEmail.toLowerCase().trim();
// console.log(normalizeEmail);
// console.log(email === normalizeEmail);

// const priceGB = '288,97E';
// const priceUS = priceGB.replace('E', '$').replace(',' ,'.');
// console.log(priceUS);

// const announcement = 'All passanger come to boarding door 23. Boarding door 23!';
// console.log(announcement.replace('door', 'gate'));
// // console.log(announcement.replace('door', 'gate'));
// console.log(announcement.replace(/door/g, 'gate'));

// // Boolean
// const plane = 'Airbus320neo';
// console.log(plane.includes('A320'));
// console.log(plane.includes('Boeing'));
// console.log(plane.startsWith('Air'));

// if(plane.startsWith('Airbus') && plane.endsWith('neo')) {
//   console.log('Part of the NEW Airbus family'); 
// };


// const checkBaggage = function (items) {
//     const baggage = items.toLowerCase();
//     if(baggage.includes('Knife') || baggage.includes('Gun')) {
//       console.log('You are NOT allowed on the board') 
//     } else {
//       console.log('Welcome aboard!');
//     }
// };
// checkBaggage('I have a laptop, some Food and pocket Knife');
// checkBaggage('Socks and camera');
// checkBaggage('Got some snacks and a gun for protection');












// ////////////////// CODING CHALLENGE //////////////////////////////////////
// const gameEvents = new Map([
//   [17, '⚽ GOAL'],
//   [36, '♾ Substitution'],
//   [47, '⚽ GOAL'],
//   [61, '♾ Substitution'],
//   [64, '🧇 Yellow Card'],
//   [69, '♦ Red Card'],
//   [70, '♾ Substitution'],
//   [72, '♾ Substitution'],
//   [76, '⚽ GOAL'],
//   [80, '⚽ GOAL'],
//   [92, '🧇 Yellow Card'],

// ]);

// const airline = 'TAP Air Portugal';
// const plane = 'A320';

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B373'[0]);
// console.log(airline.length);
// console.log('B737'.length);
// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('portugal'));
// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));
// console.log(airline.slice(0, airline.indexOf (' ')));
// console.log(airline.slice(airline.lastIndexOf(' ') + 1));
// console.log(airline.slice(-2));
// console.log(airline.slice(1, -1));




// const checkMiddleSeat = function(seat) {
//   // B and E are middle seat
//   const  s = seat.slice(-1);
//    if(s === 'B' || s === 'E')
//    console.log('You got the middle seat 😁');
//    else console.log('You got lucky 😎')  
// };
// checkMiddleSeat('11B');
// checkMiddleSeat('23C');
// checkMiddleSeat('3E')

// console.log(new String('Abiola'));
// console.log(typeof new String('Abiola'));

// console.log(typeof new String('Abiola').slice(1));









// // 1.)
// // console.log(gameEvents.values());
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.)
// gameEvents.delete(64);

// // 3.)
// console.log(`An events happened, on avarage,every ${90 / gameEvents.size} minutes`);

// const time = [...gameEvents.keys()].pop();
// console.log(time);

// console.log(`An events happened, on avarage,every ${time / gameEvents.size} minutes`);
// // 4.)
// for (const [min, events] of gameEvents) {
//   const half = min <= 45 ? 'FIRST' : 'SECOND'
//   console.log(`[${half} HALF], ${min}: ${events}`);
  
// }




// //////////////////////////// MAP ITERATION /////////////////////////////////
// const question = new Map([
//   ['question', 'What is the best programming language in the world?'],
//   [1, 'C'],
//   [2, 'Java'],
//   [3, 'JavaScript'],
//   [true, 'Correct 🍕'],
//   [false, 'Try again'],
// ]);
// console.log(question);

// // Convert object to map
// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// /// Quiz app
// console.log(question.get('question'))
// for(const [key, value] of question) {
//   if(typeof key === 'number') console.log(`Answer ${key}: ${value}`);
// };

// // const answer = Number(prompt('Your answer'));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get('correct 🍕') === answer));

// // convert Map to array
// console.log([...question]);
// // console.log(question.entries());
// console.log([...question.keys()]);
// console.log([...question.values()]);











// //////////////// MAPS FUNDAMENTALS /////////////////////////////////
// const rest = new Map();
// rest.set('name', 'Clasico Italiano');
// rest.set(1, 'Firenze Italy');
//   console.log(rest.set(2, 'Lisbon', 'Portugal'));

//   rest
//   .set('Categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
//   .set('Open', 11)
//   .set('Close', 23)
//   .set(true, 'We are open :D')
//   .set(false, 'We are close :(')

//   console.log(rest.get('name'));
//   console.log(rest.get(true));
//   console.log(rest.get(1));

//   const time = 8;
//   console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')))
  
//   console.log(rest.has('Categories'));
//   rest.delete(2);
//   // rest.clear(rest)

//   const arr = [1, 2];
//   rest.set(arr, 'Test')
//   // rest.set(document.querySelector(h1), ('Heading'));
//   console.log(rest);
//   console.log(rest.size);
//   console.log(rest.get(arr));


  
  
  



// ////////////////  SET /////////////////////////
// const ordersSet = new Set (['Pasta',
//    'Pizza', 
//    'Pizza', 
//    'Risotto',
//     'Pasta', 
//     'Pizza',
//   ]);
//   console.log(ordersSet);

//   console.log(new Set('Abiola'));

//   console.log(ordersSet.size);
//   console.log(ordersSet.has('pizza'));
//   console.log(ordersSet.has('Bread'));
//   ordersSet.add('Garlic Bread');
//   ordersSet.add('Garlic Bread');
//   console.log(ordersSet);
//   ordersSet.delete('Risotto')
//   // ordersSet.clear
//   console.log(ordersSet);

//   for (const order of ordersSet) console.log(order);

//   // Example
//   const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

//   const staffUnique = [...new Set (staff)];
//   console.log(staffUnique);
//   console.log(new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);
//   console.log(new Set('LawalAbiola'));
  
  
  
  
  
  
  
  
  
  
  

// ///////////////////////CODING CHALLENGE/////////////////////////////
// // 1.)
// for (const [i, player] of game.scored.entries())
//   console.log(`Goal ${i, + 1}: ${player}`);

// let odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// average /= odds.length
// console.log(average);

// // 3.)
// for (const [team, odd] of Object.entries(game.odds)) {
//   const teanStr = team === 'x' ? 'draw' : `victory ${game[team]}`
//   console.log(`Odd of ${teanStr} ${odd}`);
  
// }
  


//////////////////////////////////////////////////////////////////
// Looping objects: Objects keys, values and Entries

// const properties = Object.keys(openingHours);
// console.log(properties);

// let openStr =`We are open on ${properties.length} days:`;


// for (const day of properties){
//   openStr += `${day},`;
  
// };
// console.log(openStr);

// // Property VALUES
// const values = Object.values(openingHours);
// console.log(values);

// // Entire Object
// const entries = Object.entries(openingHours);
// // console.log(entries);

// for (const x of entries) {
//   console.log(x);
  
// };

// for (const [day, {open, close}] of entries) {
//   console.log(`On ${day} we open at ${open} and close at ${close}`)
// }







// // Optional Chaining

// //  if (restaurant.openingHours && restaurant.openingHours.mon)
// //   console.log(restaurant.openingHours.mon.open);
// // // WITH optional chaining
// // console.log(restaurant.openingHours.mon?.open);
// // console.log(restaurant.openingHours?.mon?.open);




// // //Example
// // const days = ['Mon', 'Tue', 'Wed', 'Thus', 'Friday', 'Sat', 'Sun'];
// // for (const day of days) {
// //   const open = restaurant.openingHours[day]?.open ?? 'closed';
// //   console.log(`On ${day}, we open at ${open}`);
  
// // }
// // //Method
// // console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// // // Array 
// // // const users = [{name: 'Abiola', email: 'abiola@gmail.com'}];

// // const users = [];
// // console.log(users[0]?.name ?? 'User array empty');

// // if (users.length > 0) console.log(users[0]?.name); else console.log('User array empty');




// //   // Looping Arrays The for-of Loop

// // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// // for(const item of menu) console.log(item);

// // for (const [i, el] of menu.entries()) {
// //      console.log(`${i + 1}: ${el}`);
     
// //   // console.log(`${item[0] + 1}: ${item[1]}`);
  
// // };
// // // console.log([...menu.entries()]);





// // // 1.)

// // const [players1, players2] = game.players;
// // console.log(players1, players2);

// // // 2.)
// // const [gk, ...fieldPlayers] = players1;
// // console.log(gk, fieldPlayers);

// // // 3.)
// // const allPlayers = [...players1, ...players2];
// // console.log(allPlayers);

// // // 4.)
// // const players1Final = [...players1, 'Thiago', 'Coutinho', 'Periscic'];

// // // 5.)
// // const {odds: {team1, x: draw, team2}} = game;
// // console.log(team1, draw, team2);

// // // 6.)
// // const printGoals = function (...players) {
// //   console.log(players);
// //   console.log(`${players.length} goals were scored`);
// // };

// // // printGoals('Davis', 'Muller', 'Lewandoski', 'Kimmich');
// // // printGoals('Davis', 'Muller');
// // printGoals(...game.scored);

// // // 7.)
// // team1 < team2 && console.log('Team 1 is more likely to win');
// // team1 > team2 && console.log('Team 2 is more likely to win');


















// restaurant.numGuest = 0;
// const guests = restaurant.numGuest || 10;
// console.log(guests);

// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);


//  console.log("-------OR---------");
 
// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// // restaurant.numGuest = 23;
// const guest1 = restaurant.numGuest ? restaurant.numGuest: 10;
// console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// console.log("---------AND------");
// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log('Hello' && 23 && null && 'Jonas');

// // Practical example
// if(restaurant.orderPizza) {
//   restaurant.orderPizza('mushroom', 'spinach');
// }

// restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');






// Use ANY data type, return ANY data type, short-circuiting

//////////////////////////////////////////////
      // Rest pattern and parameters

    //  // 1) Destructuring

    // // SPREAD, because on  RIGHT side of =
    // const arr = [1, 2, ...[3, 4]];
  
    // // REST, because on the LEFT side of =
    // const [a, b, ...others] = [1, 2, 3, 4, 5];
    // console.log(a, b, others);

    // const [pizza, , Risotto, ...otherFood] = [...restaurant.mainMenu, restaurant.starterMenu]
    //  console.log(pizza, Risotto, otherFood);
    //  // Objects
    //  const {sat, ...weekdays} = restaurant.openingHours
    //  console.log(weekdays);
     

    //  // 2) Functions
    //  const add = function (...numbers) {
    //   // console.log(numbers);
    //   let sum = 0;
    //   for (let i = 0; i < numbers.length; i++ ) sum += numbers[i];
    //     console.log(sum)
    //  };
    //  add(2, 3);
    //  add(5, 3,7, 2);
    //  add(8, 2, 5, 3, 2, 1, 4);

    //  const x = [23, 5, 7];
    //  add(...x);

    //  restaurant.orderPizza('mushroom', 'onion', 'olives', 'spinach');
    //  restaurant.orderPizza('mushroom');

//////////////////SPREAD OPERATOR  (...)//////////////////////////
      
  // const arr = [7, 8, 9];
  // const badNewArr = [1, 2, arr[0], arr[1],arr[2]];
  // console.log(badNewArr);
  

  // const newArr = [1, 2, ...arr];
  // console.log(newArr);
  // console.log(...newArr);
  // console.log(1,2,7,8,9);
  
  // const newMenu = [...restaurant.mainMenu, 'Gnocci'];
  // console.log(newMenu);

  // // Coppy Array
  // const mainMenuCopy = [...restaurant.mainMenu];

  // // Join Array
  // const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
  // console.log(menu);

  // // Iterables: arrays, strings, maps, sets. NOT objects
  // const str = 'Jonas';
  // const letters = [...str, '', 'S.'];
  // console.log(letters);
  // console.log(...str);
  // // console.log(`${...str} schemedmann`)

  // // Real-world example
  // const ingredents =  [
  //   // prompt("Let's make pasta! Ingredent 1?"),
  //   // prompt('Ingredent 2?'),
  //   // prompt('Ingredent 3?')
  // ];
  // console.log(ingredents);

  // restaurant.orderPasta(ingredents[0], ingredents[1], ingredents[2]);
  // restaurant.orderPasta(...ingredents);
    
  // // Objects
  // const newRestaurant = {foundedIn: 1998, ...restaurant, founder: 'Abiola'};
  // console.log(newRestaurant);

  // const restaurantCopy = {...restaurant};
  // restaurantCopy.name = 'Restaranti Roma';
  // console.log(restaurantCopy.name);
  // console.log(restaurant.name);


      ////////////////// DESTUCTURING OBJECTS   //////////////////////

//    restaurant.orderDelivery({
//     time: '22:30',
//     address: 'Via del sole, 21',
//     mainIndex: 2,
//     storeIndex: 2,
//    });


//    restaurant.orderDelivery({
//     address: 'Via del sole, 21',
//     starterIndex: 1,
//    })


//   const {name, openingHours, categories} = restaurant;
//   console.log(name, openingHours, categories);

//   const {name: restaurantName, openingHours: hours, categories: tags} = restaurant;
//   console.log(restaurantName, hours, tags);


//   // Default values
//   const { menu = [], starterMenu: starters = []} = restaurant;
//   console.log(menu, starters);

//   // Mutating variables
//   let a = 111;
//   let b = 999;
//   const obj = {a: 23, b: 7, c: 14};
//    ({a, b} = obj);
//   console.log(a, b);
  
  // Nested objects
//   const { fri } = openingHours
//   console.log(fri);
  
// const {fri: {open: o, close: c},
// } = openingHours;
// console.log(o, c);

  
  

// const arr = [2, 3, 4];
// const a = arr [0];
// const b = arr [1];
// const c = arr [2];

// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// let [main, , secondary] = restaurant.categories
// console.log(main,  secondary);

// Switching variable
// const temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);

// Easier way
// [main, secondary] = [secondary, main];
// console.log(main, secondary);


// Received 2 return values from a function
//  const [starter, mainCourse]= (restaurant.order(2, 0));
//  console.log(starter, mainCourse);

// // Nested Destructurwing
//  const nested = [2, 4, [5, 6]];
// //  const [i, , j] = nested;
// const [i, , [j, k]] = nested;
//  console.log(i, j, k);

//  // Default values
//  const [p = 1, q = 1, r = 1] = [8, 9];
//  console.log(p, q, r);
 





 
 


