'use strict';

/////////////////////////////////////////////////////////
// BANKIT APP

//  Data

const account1 = {
  owner: 'Lawal Abiola Bossweb',
  movements: [200, 450, -400, 3000, 650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T27:31:17.178Z',
    '2019-12-18T07:42:02.383Z',
    '2020-01-28TO9:51:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2024-07-18T27:31:17.929Z',
    '2020-07-11T23:36:17.790Z',
  ],
  currecy: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jonas Schmedtmann',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    '2019-11-01T13:51:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25TO6:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2024-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currecy: 'USD',
  locale: 'en-US', // en-US
};

const account3 = {
  owner: 'Jessica Davis',
  movements: [200, -200, 340, -300, -20, 50, 400, 460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Abiola Bossweb',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 0.5,
  pin: 4444,
};

const accounts = [account1, account2];

// const accounts = [account1, account2, account3, account4];

// ELEMENT
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance_value');
const labelSumIn = document.querySelector('.summary_value--in');
const labelSumOut = document.querySelector('.summary_value--out');
const labelSumInterest = document.querySelector('.Summary_value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovement = document.querySelector('.movements');
const btnLogin = document.querySelector('.login_btn');
const btnTransfer = document.querySelector('.form_btn--transfer');
const btnLone = document.querySelector('.form_btn--loan');
const btnClose = document.querySelector('.form_btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login_input--user');
const inputLogingPin = document.querySelector('.login_input--pin');
const inputTransferTo = document.querySelector('.form_input--to');
const inputTransferAmount = document.querySelector('.form_input--amount');
const inputLoanAmount = document.querySelector('.form_input--loan-amount');
const inputCloseUsername = document.querySelector('.form_input--user');
const inputClosePin = document.querySelector('.form_input--pin');

////////////////////////// Function ///////////////////////////

const formatMovementDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);

  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed === 7) return `${daysPassed} days ago`;

  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth() + 1}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currecy) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currecy,
  }).format(value);
};

const displayMovement = function (acc, sort = false) {
  containerMovement.innerHTML = '';
  //   //   textContent = 0

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(acc.movementsDates[i]);
    const displayDate = formatMovementDate(date, acc.locale);

    const formattedMov = formatCur(mov, acc.locale, acc.currecy);

    const html = `
             <div class="movements_row">
            <div class="movements_type movements_type--
            ${type}">
           ${i + 1} ${type}</div>
            <div class="movements_date">${displayDate}</div>
           <div class="movements_value">${formattedMov}</div>
            `;
    containerMovement.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);

  labelBalance.textContent = formatCur(acc.balance, acc.locale, acc.currecy);
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currecy);

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currecy);

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currecy);
};

const createUsername = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};

createUsername(accounts); // lab

const updateUI = function (acc) {
  // Display movement
  displayMovement(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(Math.trunc(time % 60)).padStart(2, 0);
    // In each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;
    //Decrease time 1s

    // When 0 seconds, stop timer and log out user
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    // time = time - 1;
    time--;
  };

  // set time to 5 minutes
  let time = 120;

  // call the timer every seconds
  tick();
  const timer = setInterval(tick, 1000);

  return timer;
};
//////////////////////////////////////////////////////////////////////
// Event handlers
let currentAccount, timer;

// // FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  if (currentAccount?.pin === +inputLogingPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // create current date and time
    // Experimenting API
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      // weekDay: 'long',
    };
    // const locale = navigator.language;
    // console.log(locale);

    labelDate.textContent = new Intl.DateTimeFormat(
      'currentAccount.locale',
      options
    ).format(now);

    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);

    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input field
    inputLoginUsername.value = inputLoginUsername.value = '';

    inputLogingPin.blur();

    // Timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();

    // update UI
    updateUI(currentAccount);
  }
  // console.log(currentAccount);
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Add transfer Date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // update UI
    updateUI(currentAccount);

    // Reset Timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});
btnLone.addEventListener('click', function (e) {
  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movements
      currentAccount.movements.push(amount);

      // Add Loan Date
      currentAccount.movementsDates.push(new Date().toISOString());

      // Update UI
      updateUI(currentAccount);

      // Reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 2500);
  }
  inputLoanAmount.value = '';
});
e.preventDefault();

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .index of (23);

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
});

// // International Numbers (Intl)
// const num = 3884764.23;
// const options = {
//   // style: 'unit',
//   // style: 'percent',
//   style: 'currency',
//   // unit: 'mile-per-hour',
//   unit: 'celsius',
//   currecy: 'EUR',
//   useGrouping: false,
// };

// console.log('US:', new Intl.NumberFormat('en-US', options).format(num)); // 3,884,764.23
// console.log('Germany:', new Intl.NumberFormat('de-DE', options).format(num)); // 3.884.764,23
// console.log('Syria:', new Intl.NumberFormat('ar-SY', options).format(num)); // 3.884.764,23

// console.log(
//   navigator.language,
//   new Intl.NumberFormat(navigator.language, options).format(num)
// );

// Timers, setTimeout and setInterval
// const ingredients = ['olive', 'spinach'];
// const pizzaTimer = setTimeout(
//   (ing1, ing2) => console.log(`Here is your pizza with ${ing1} and ${ing2}🥧`),
//   3000,
//   ...ingredients
// );
// console.log('Waiting...');
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// // setInterval
// setInterval(function () {
//   const now = new Date();
//   console.log(now);
// }, 1000);

// Implementing  a countdown Timer

/////////////////////////// LECTURE ///////////////////////////////
// console.log(23 === 23.0); // true
// // Base 10 - 0 to 9. 1/10 = 0.1.  3/10 = 3.33333333
// // Binary base 2 - 0 1

// console.log(0.1 + 0.2); // 0.300000000000004
// console.log(0.1 + 0.2 === 0.3); // false

// // Conversion
// console.log(Number('23')); // 23
// console.log(+'23'); // 23

// // Parsing
// console.log(Number.parseInt('30px', 10)); // 30
// console.log(Number.parseInt('e23', 10)); // NAN

// console.log(Number.parseFloat('2.5rem')); // 2.5
// console.log(Number.parseInt('2.5rem')); // 2

// // console.log(Number.parseFloat('2.5rem'));

// // Check if value is NaN
// console.log(Number.isNaN(20)); // false
// console.log(Number.isNaN('20')); // false
// console.log(Number.isNaN(+'20X')); // true
// console.log(Number.isNaN(23 / 0)); // false or infinity

// // Check if value is a number
// console.log(Number.isNaN(20)); // true
// console.log(Number.isFinite('20')); // false
// console.log(Number.isFinite(+'20')); // false
// console.log(Number.isFinite(23 / 0)); // false

// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23)); // true
// console.log(Number.isInteger(23 / 0)); // false

// // MATH AND ROUNDING
// console.log(Math.sqrt(25)); // 5
// console.log(25 ** (1 / 2)); // 5
// console.log(25 ** (1 / 3)); //2

// console.log(Math.max(5, 18, 23, 11, 2)); // 23
// console.log(Math.max('5', '18', '23', '11', '2')); // 23
// console.log(Math.max(5, 18, '23px', 11, 2)); // NaN

// console.log(Math.min(5, 18, 23, 11, 2)); // 2

// console.log(Math.PI * Number.parseFloat('10px') ** 2); // 314.1592653589793

// console.log(Math.trunc(Math.random() * 6) + 1); // from 1 to 6

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (min - max) + 1) + min;
// // 0...1 -> 0...(max - min) -> min...max
// console.log(randomInt(10, 20)); // change by clicking for times ( + )

// // const randomInt2 = (min, max) =>
// //   Math.floor(Math.random() * (min - max) + 1) + min;
// // // 0...1 -> 0...(max - min) -> min...max
// // console.log(randomInt2(10, 20)); // change by clicking for times ( - )

// // Rounding Integers
// console.log(Math.trunc(23.3)); // 23

// console.log(Math.round(23.3)); // 23
// console.log(Math.round(23.9)); // 24

// console.log(Math.ceil(23.3)); // 24
// console.log(Math.ceil(23.9)); // 24

// console.log(Math.floor(23.3)); // 23
// console.log(Math.floor(23.9)); // 23

// // (floor and trunc are the same when they are positive)
// console.log(Math.trunc(23.3)); // 23
// console.log(Math.floor(23.9)); // 23

// // (But otherwise with negative number)

// console.log(Math.trunc(-23.3)); // -23
// console.log(Math.floor(-23.9)); // -24

// // Rounding decimals
// console.log((2.7).toFixed(0)); // 3
// console.log((2.7).toFixed(3)); // 2.700
// console.log((2.345).toFixed(2)); // 2.35
// console.log(+(2.345).toFixed(2)); // 2.35

// // Remaider Operator
// console.log(5 % 2); // 1
// console.log(5 / 2); // 2.5  // 5 = 2 * 2 + 1

// console.log(8 % 3); // 2
// console.log(8 / 3); // 2.66666666666665  // 8 = 2 * 3 + 2

// console.log(6 % 2); // 0
// console.log(6 / 2); // 6

// console.log(7 % 3); // 1
// console.log(7 / 3); // 3.5

// const isEven = n => n % 2 === 0;
// console.log(isEven(8)); // true
// console.log(isEven(23)); // false
// console.log(isEven(514)); // true

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('movements_row')].forEach(function (row, i) {
//     // 0, 2, 4, 6
//     if (i % 2 === 0) row.style.backgroundColor = 'orangered';
//     // 0, 3, 6, 9
//     if (i % 3 === 0) row.style.backgroundColor = 'blue';
//   });
// });

// // Working with BigInt
// console.log(2 ** 53 - 1); // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// console.log(2 ** 53 + 1);
// console.log(2 ** 53 + 2);
// console.log(2 ** 53 + 3);
// console.log(2 ** 53 + 4);

// console.log(7641785736472164846826116421n);
// console.log(BigInt(7641785));

// // Operations
// console.log(10000 + 10000n); //
// console.log(7616233472172129821937328932n * 10000000n);
// // console.log(Math.sqrt(16n));

// const huge = 426565675213787239978n;
// const num = 23;
// console.log(huge * BigInt(num));

// // Exceptions
// console.log(20n > 15); // true
// console.log(20n === 20); // false
// console.log(typeof 20n); // BigInt
// console.log(20n == 20); // true
// console.log(20n == '20');

// console.log(huge + 'is REALLY big!!!');

// // Divisions
// console.log(10n / 3n); // 3n
// console.log(11n / 3n); // 3n
// console.log(12n / 3n); // 4n

// console.log(10 / 3); // 3.3333333333335

// // Create Date
// const now = new Date();
// console.log(now);
// console.log(new Date('Oct 24 2024 04:00:20'));
// console.log(new Date('Octomber 24, 2024'));
// console.log(account1.movementsDates([0]));

// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 31));

// console.log([0]);
// console.log(new Date(3 * 24 * 60 * 60 * 1000));

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);

// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay());
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString());
// console.log(future.getTime());

// console.log(new Date(2142422229834));

// console.log(Date.now());

// future.setFullYear(2040);
// console.log(future);

const future = new Date(2037, 10, 19, 15, 23);
console.log(+future);

const calcDaysPassed = (date1, date2) =>
  Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

const days1 = calcDaysPassed(new Date(2037, 3, 4), new Date(2037, 3, 14));
console.log(days1);

/////////////////////////////////////////////////////////////////////////////////
// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// const deposits = movements.filter(function (mov, i, arr) {
//   return mov > 0;
// });
// console.log(movements);
// console.log(deposits);

// const depositFor = [];
// for (const mov of movements) if (mov > 0) depositFor.push(mov);
// console.log(depositFor);

// const withdrawal = movements.filter(mov => mov < 0);
// console.log(withdrawal);

// console.log(movements);

//   // Accumulator -> SNOWBALL
//   const balance = movements.reduce(function(acc, cur, i, arr) {
//     console.log(`Iteration ${i}: ${acc}`)
//     return acc + cur
//   }, 0);
//   console.log(balance);

// const balance2 = movements.reduce((acc, cur) => acc + cur, 0);
// console.log(balance2);

// let balance3 = 0;
// for (const mov of movements) balance3 += mov;
// console.log(balance3);

// // Maximum Value
// const max = movements.reduce((acc, mov) => {
//   if (acc > mov) return acc;
//   else return mov;
// }, movements[0]);
// console.log(max);

// ///////////////////// CODING CHALLENGE 2 /////////////////////

// const calcAverageHumanAge = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);
//   console.log(humanAges);
//   console.log(adults);

//   // const average = adults.reduce((acc, age) => acc + age, 0) / adults.length;

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   // 2 3. = (2+3)/2 = 2.5 === 2/2+3/2 = 2.5

// return average;
// };
const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
console.log(avg1, avg2);

const euroToUsd = 1.1;
console.log(movements);

// // PIPELINE
const totalDepositInUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr)
    return mov * euroToUsd;
  })
  // .map(mov => mov * euroToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositInUSD);

// //////////////////////// CODING CHALLENGE /////////////////////////////////
// const checkDogs = function(dogsjulias, dogskate) {
//   const dogsjuliasCorrected = dogsjulias.slice();
//   dogsjuliasCorrected.splice(0, 1);
//   dogsjuliasCorrected.splice(-2)
// //   dogsjulias.slice(1, 3);
//  const dogs = dogsjuliasCorrected.concat(dogskate);
//  console.log(dogs);

//  dogs.forEach(function(dog, i) {
//     if(dog >= 3) {
//      console.log(`Dog number ${i + 1} is an adults, and is ${dog} years old`)
//     } else {
//         console.log(`Dog number ${i + 1} is still a puppy🐶.`)
//     }
//  })

//   console.log(dogsjuliasCorrected);

// }
// // checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
// checkDogs([9, 1, 6, 18, 3], [10, 5, 6, 1, 4]);

//    console.log(containerMovement.innerHTML);

////////////////////////////////////////////////////////////

// const movements = [200, 450, -400, 3000, 650, -130, 70, 1300];

// const euroToUsd = 1.1;
// // const movementsUSD = movements.map(function(mov) {
// //     return mov * euroToUsd;
// // });
// const movementsUSD = movements.map(mov => euroToUsd * mov)

// console.log(movements);
// console.log(movementsUSD);

// const movementsUSDfor = [];
// for(const mov of movements) movementsUSDfor.push(mov * euroToUsd);
// console.log(movementsUSDfor);

//  const movementsDescriptions =  movements.map((mov, i) =>
//     `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
// );

// console.log(movementsDescriptions);

/////////////////////////////////////////////////////////////////

// // SLICE
// let arr = ['a', 'b', 'c', 'd', 'e' ];
// console.log(arr.slice(2));
// console.log(arr.slice(2, 4));
// console.log(arr.slice(-2));
// console.log(arr.slice(-1));
// console.log(arr.slice(1,-2));
// console.log(arr.slice());
// console.log([...arr]);

// // SPLICE
// // console.log(arr.splice(2));
// arr.splice(-1);
// console.log(arr);
// arr.splice(1, 2);
// console.log(arr);

// // REVERSE
// //  arr = ['a', 'b', 'c', 'd', 'e' ];
// //  const arr2 = ['j', 'i', 'h', 'g', 'f'];
// //  console.log(arr2.reverse());
// //  console.log(arr2);

// arr = ['a', 'b', 'c', 'd', 'e'];
// const arr2 = ['j', 'i', 'h', 'g', 'f'];
// console.log(arr2.reverse());
// console.log(arr2);

// // CONCAT
// const letters = arr.concat(arr2);
// console.log(letters);
// console.log([...arr, ...arr2]);

// // JOIN
// console.log(letters.join(' - '));

// const movements = [200, 450, -400, 3000, 650, -130, 70, 1300];

// // for (const movement of movements) {
// for (const [i, movement] of movements.entries()){
//     if(movement > 0) {
//     console.log(`Movement ${i + 1}: You deposited ${movement}`);

// } else {
//     console.log(`Movement ${i + 1}: You withdrew ${Math.abs(movement)}`)
// }
// };
// // }

// console.log('--------------FOREACH--------------');

// movements.forEach(function(mov, i, arr) {
//     if(mov > 0) {
//         console.log(`Movement ${i + 1}: You deposited ${mov}`);

//     } else {
//         console.log(`Movement ${i + 1}: You withdrew ${Math.abs(mov)}`)
//     }
// });

// 0: function (200);
// 1: function (450);
// 2: function (400);

//  MAP
// const currences = new Map([
//   ['USD', 'United states dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// currences.forEach(function (value, key, map) {
//   console.log(`${key}: ${value}`);
// });

// // SET
// const currencesUnique = new Set(['USD', 'GPD', 'EUR', 'GPD', 'EUR']);
// console.log(currencesUnique);

// currencesUnique.forEach(function (value, _, map) {
//   console.log(`${value}: ${value}`);
// });

// ///////////////////// CODING CHALLENGE 3 /////////////////////

// const calcAverageHumanAge2 = function (ages) {
//   const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const adults = humanAges.filter(age => age >= 18);

//   const average = adults.reduce(
//     (acc, age, i, arr) => acc + age / arr.length,
//     0
//   );

//   return average;
// };
// const calcAverageHumanAge = ages =>
//   ages
//     .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
//     .filter(age => age >= 18)
//     .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

// const avg1 = calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
// const avg2 = calcAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);
// console.log(avg1, avg2);

/////////////// THE FIND METHOD ////////////////////////////////
// const firstWithdrawal = movements.find(mov => mov < 0);
// console.log(movements);
// console.log(firstWithdrawal);

// console.log(accounts);

// const account = account.find(acc => acc.owner === 'Jesica Davis');
// console.log(account);

// console.log(movements);

// // EQUALITY
// console.log(movements.includes(-130));

// // SOME: CONDITION

// const anyDeposit = movements.some(mov => mov > 0);
// console.log(anyDeposit);

// // EVERY
// console.log(movements.every(mov => mov > 0));
// console.log(account4.movements.every(mov => mov > 0));

// // Seperate Callback
// const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

// const arr = [[1, 2, 3], [4, 5, 6], 7, 8];
// console.log(arr.flat());

// const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
// console.log(arrDeep.flat(2));

// // flat
// const overAllBalance = accounts
//   .map(acc => acc.movements)
//   .flat()
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance);

// // flatMap
// const overAllBalance2 = accounts
//   .flatMap(acc => acc.movements)
//   .reduce((acc, mov) => acc + mov, 0);
// console.log(overAllBalance2);

// // Sorting Array String
// const owners = ['Abiola', 'Jonas', 'Zach', 'Adam'];
// console.log(owners.sort());
// console.log(owners);

// // With Number
// console.log(movements);

// return < 0, A, B (keep order)
// return > 0, A, B (switch order)

// Ascending
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (b < a) return -1;
// });

// movements.sort((a, b) => a - b);

// console.log(movements);

// Descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (b < a) return 1;
// });

// movements.sort((a, b) => b - a);

// console.log(movements);

// const arr = [1, 2, 3, 4, 5, 6, 7];

// console.log(new Array(1, 2, 3, 4, 5, 6, 7));
// // Empty arrays + fill method
// const x = new Array(7);
// console.log(x);
// // console.log(x.map(() => 5))

// x.fill(1, 3, 5);
// x.fill(1);
// console.log(x);

// arr.fill(23, 4, 6);
// console.log(arr);

// // Array .from()
// const y = Array.from({ length: 7 }, () => 1);
// console.log(y);

// const z = Array.from({ length: 7 }, (cur, i) => i + 1);
// console.log(z);

// labelBalance.addEventListener('click', function (e) {
//   const movementsUI = Array.from(
//     document.querySelectorAll('.movements_value'),
//     el => Number(el.textContent.replace('E', ''))
//   );
//   console.log(movementsUI);
// });

// const movementsUI2 = [...document.querySelectorAll('.movements_value')];

////////////////// CODING CHALLENGE /////////////////////////////////

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Maltilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Micheal'] },
];

// 1).
dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
console.log(dogs);

// 2).
const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

// 3).
const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooLittle);

// 4).

// "Maltilda and Alice and Bob's dogs eat too much!"
// "Sarah and John and Micheal's dog eat too little!"
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')}'s dogs eat too little!`);

// 5).
console.log(dogs.some(dog => dog.curFood === dog.recFood));

// 6).
// current > (recommended * 0.90) && current < (recommended * 1.10)

const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

// 7).
console.log(dogs.filter(checkEatingOkay));

// sort it by recommended food portion in an ascending order

const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
