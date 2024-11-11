'use strict';

// CONSTRUCTION METHOD

// const Person = function (firstName, birthYear) {
//   // Instaces Properties
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //   // Never to this
//   //   this.calcAge = function () {
//   //     console.log(2037 - birthYear);
//   //   }
// };

// const abiola = new Person('Abiola', 2000);
// console.log(abiola);

// // // 1). New {} is created
// // // 2). Function is called, this = {}
// // // 3). {} link to prototype
// // // 4). Function automatically return

// const lawal = new Person('Lawal', 1950);
// const ola = new Person('Ola', 1950);

// Person.hey = function () {
//   console.log('Hey there 🙋‍♀️');
// };
// Person.hey();
// console.log(lawal, ola);

// console.log(abiola instanceof Person);

// // Prototype Properties
// console.log(Person.prototype);

// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };
// abiola.calcAge();
// lawal.calcAge();

// console.log(abiola.__proto__);
// console.log(abiola.__proto__ === Person.prototype);

// console.log(Person.prototype.isPrototypeOf(abiola));
// console.log(Person.prototype.isPrototypeOf(lawal));
// console.log(Person.prototype.isPrototypeOf(Person));

// Person.prototype.species = 'Homo Sapiens';
// console.log(abiola.species, lawal.species);

// console.log(abiola.hasOwnProperty('firstName'));
// console.log(abiola.hasOwnProperty('spicies'));

// console.log(abiola.__proto__);
// // Object.prototype (top of the prototype chain)
// console.log(abiola.__proto__.__proto__);
// console.log(abiola.__proto__.__proto__.__proto__);

// console.dir(Person.prototype.constructor);
// console.log(Person.prototype.constructor);

// const arr = [2, 3, 4, 5, 6, 6, 7, 7, 7]; // new Array []
// console.log(arr.__proto__ === Array.prototype);
// console.log(arr.__proto__.__proto__);

// Array.prototype.unique = function () {
//   return [...new Set(this)];
// };
// console.log(arr.unique());

// const h1 = document.querySelector('h1');
// console.log(h1);

///// CODING CHALLENGE /////////////////////////////////////
// const Car = function (make, speed) {
//   this.make = make;
//   this.speed = speed;
// };

// Car.prototype.accelerate = function () {
//   this.speed += 10;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// Car.prototype.brake = function () {
//   this.speed -= 5;
//   console.log(`${this.make} is going at ${this.speed} km/h`);
// };

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);

// bmw.accelerate();
// bmw.accelerate();
// bmw.brake();
// bmw.accelerate();

/////////////// ES6 Class //////////////////////////////////
// class expression
// const PersonCl = class {};

// class declaration
// class PersonCl {
//   constructor(fullName, birthYear) {
//     this.fullName = fullName;
//     this.birthYear = birthYear;
//   }
//   // Instance method
//   // Method will be added to .prototype property
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   }
//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
//   get age() {
//     return 2024 - this.birthYear;

//     // set a property that already exist
//   }
//   set fullName(name) {
//     console.log(name);
//     if (name.includes(' ')) this._fullName = name;
//     else alert(`${name} this is not a full name!`);
//   }
//   get fullName() {
//     return this._fullName;
//   }
//   // Static method
//   static hey() {
//     console.log('Hey there 🙋‍♀️');
//     console.log(this);
//   }
// }

// class StudentCl extends PersonCl {
//   constructor(fullName, birthYear, course) {
//     // Always need to happen
//     super(fullName, birthYear);
//     this.course = course;
//   }
//   introduce() {
//     console.log(`My name is ${this.fullName} and i study ${this.course}`);
//   }
//   calcAge() {
//     console.log(
//       `I'm ${2024 - this.birthYear} years old, as a student i feel more like ${
//         2024 - this.birthYear + 10
//       } `
//     );
//   }
// }
// const aisha = new StudentCl('Aisha', 2010);
// const aisha = new StudentCl('Aisha Abiola', 2010, 'Computer Science');
// aisha.introduce();
// aisha.calcAge();
// const bukky = new PersonCl('Bukky Omoloye', 1997);
// console.log(bukky);
// bukky.calcAge();
// console.log(bukky.__proto__ === PersonCl.prototype);
// console.log(bukky.age);

// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// bukky.greet();

// Classes are not hoisted
// Classes are first-class citizens
// classes are excuted in strict mode

//  Setters and Getters
// const walter = new PersonCl('walter white', 1965);
// PersonCl.hey();

// const account = {
//   owner: 'Abiola',
//   movements: [200, 530, 120, 300],

//   get latest() {
//     return this.movements.slice(-1).pop();
//   },

//   set latest(mov) {
//     return this.movements.push(mov);
//   },
// };
// console.log(account.latest);

// account.latest = 50;
// console.log(account.movements);

// const PersonProto = {
//   calcAge() {
//     console.log(2024 - this.birthYear);
//   },
//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);
// console.log(steven);
// steven.name = 'Steven';
// steven.birthYear = 2000;
// steven.calcAge();

// console.log(steven.__proto__ === PersonProto);

// const sarah = Object.create(PersonProto);
// sarah.init('Serah', 1980);
// sarah.calcAge();

// CODING CHALLENGE #2

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }

//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }

//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }
// const ford = new CarCl('Ford', 120);
// console.log(ford.speedUS);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUS = 50;
// console.log(ford);

// Person.prototype.calcAge = function () {
//   console.log(2024 - this.birthYear);
// };

// const Student = function (firstName, birthYear, course) {
//   Person.call(this, firstName, birthYear);
//   this.course = course;
//   // this.firstName = firstName;
//   // this.birthYear = birthYear;
//   // this.course = course;
// };
// // Linking Prototype
// Student.prototype = Object.create(Person.prototype);

// Student.prototype.introduce = function () {
//   console.log(`My name is ${this.firstName} and I study ${this.course}`);
// };

// const mike = new Student('Mike', 2020, 'Computer Science');
// mike.introduce();
// mike.calcAge();

// console.log(mike.__proto__);
// console.log(mike.__proto__.__proto__);

// console.log(mike instanceof Student);
// console.log(mike instanceof Person);
// console.log(mike instanceof Object);

// Student.prototype.constructor = Student;
// console.log(Student.prototype.constructor);

/////////////////////////////////////////////////////////////////////////////////
// CODING CHALLENGE
// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// // Link the prototype

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function (chargeTo) {
//   this.charge = chargeTo;
// };

// EV.prototype.accelerate = function () {
//   this.speed += 20;
//   this.charge--;
//   console.log(
//     `${this.make} is going at ${this.speed} km/h, with a charge of ${this.charge}`
//   );
// };

// const tesla = new EV('Tesla', 120, 23);
// tesla.chargeBattery(90);
// console.log(tesla);
// tesla.brake();
// tesla.accelerate();

////////////// Ineritance  between "classes"" Object.create

// const PersonProto = {
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   },
// };

// const steven = Object.create(PersonProto);

// const studentPtoto = Object.create(PersonProto);

// studentPtoto.init = function (firstName, birthyear, course) {
//   PersonProto.init.call(this, firstName, birthyear);
//   this.course = course;
// };

// studentPtoto.introduce = function () {
//   console.log(`My name is ${this.firstName} and i study ${this.course}`);
// };

// const jay = Object.create(studentPtoto);
// jay.init('Jay', 2010, 'Computer Science');
// jay.introduce();
// jay.calcAge();

// 1). Public fields
// 2). Private fields
// 3). Public methods
// 4). Private methods
// 5). (There is also a static version)

//  ("------------ACCOUNT--------------")
// class Account {
//   // 1). Public fields (instances)
//   locale = navigator.language;

//   //2).  Private fields (instances)
//   #movements = [];
//   #pin;

//   constructor(owner, currency, pin) {
//     this.owner = owner;
//     this.currency = currency;

//     // Protected Property
//     this.#pin = pin;
//     // this._movements = [];
//     // this.locale = navigator.language;

//     console.log(`Thanks for opening an account, ${owner}`);
//   }

//   // 3). Public methods
//   // Public Interface
//   getMovements() {
//     return this.#movements;
//   }

//   deposit(val) {
//     this.#movements.push(val);
//     return this;
//   }
//   withdraw(val) {
//     this.deposit(-val);
//     return this;
//   }

//   requestLoan(val) {
//     // if (this.#approveLoan(val)) {
//     if (this._approveLoan(val)) {
//       this.deposit(val);
//       console.log(`Loan approved`);
//       return this;
//     }
//   }

//   static helper() {
//     console.log('Helper');
//   }
//   // 4). Private methods
//   // #approveLoan(val) {}
//   _approveLoan(val) {
//     return true;
//   }
// }
// const acc1 = new Account('Abiola', 'EUR', 1111);

// // acc1._movements.push(250);
// // acc1._movements.push(-140);

// acc1.deposit(250);
// acc1.withdraw(140);
// acc1.requestLoan(1000);
// console.log(acc1.getMovements());

// console.log(acc1);

// // console.log(acc1.#pin);
// // console.log(acc1.#movement);
// // acc1.#approveLoan(1000);

// Account.helper();

// //////////  CHAINING //////////////////
// acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);
// console.log(acc1.getMovements());

///////////// Encapsulation Protected Properties and Method ////////////////////////////

// class CarCl {
//   constructor(make, speed) {
//     this.make = make;
//     this.speed = speed;
//   }
//   accelerate() {
//     this.speed += 10;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//   }
//   brake() {
//     this.speed -= 5;
//     console.log(`${this.make} is going at ${this.speed} km/h`);
//     return this;
//   }
//   get speedUS() {
//     return this.speed / 1.6;
//   }
//   set speedUS(speed) {
//     this.speed = speed * 1.6;
//   }
// }

// class EVCL extends CarCl {
//   #charge;

//   constructor(make, speed, charge) {
//     super(make, speed);
//     this.#charge = charge;
//   }

//   chargeBattery(chargeTo) {
//     this.#charge = chargeTo;
//     return this;
//   }

//   accelerate() {
//     this.speed += 20;
//     this.#charge--;
//     console.log(
//       console.log(
//         `${this.make} is going at ${this.speed} km/h, with a charge of${
//           this.#charge
//         }`
//       )
//     );
//     return this;
//   }
// }

// const rivian = new EVCL('Rivian', 120, 23);
// console.log(rivian);
// // console.log(revian.#charge);
// rivian
//   .accelerate()
//   .accelerate()
//   .accelerate()
//   .brake()
//   .chargeBattery(50)
//   .accelerate();

// console.log(rivian.speedUS);
