/* eslint-disable no-console */
'use strict';


// function createMyObject() {

//   return { 
//     foo: 'bar',
//     answerToUniverse: 42,
//     'olly olly': 'oxen free',
//     sayHello: function() {
//       return 'hello';
//     }
//   };
// }

// function updateObject(obj) {
//   // if (typeOf obj === 'object') {
//   obj.foo = 'foo';
//   obj.bar = 'bar';
//   obj.bizz = 'bizz';
//   obj.bang = 'bang';
//   return obj;
// }

// function personMaker() {
//   var person = {
//     firstName: 'Paul',
//     lastName: 'Jones',
//     // replace `null` with a function that uses self reference to return
//     // full name
//     fullName: function () { //why doesnt an anonymous function work here?
//     	return `${this.firstName} ${this.lastName}`;
//     }
//     // fullName: () => `${this.firstName} ${this.lastName}`
//   };
//   return person;
// }

// const sampleObj = {
//   foo: 'foo',
//   bar: 'bar',
//   bizz: 'bizz',
//   bang: 'bang',
// };

// function keyDeleter(obj) {
//   // your code here
//   delete obj.foo;
//   delete obj.bar;
//   return obj;
// }

const loaf = {
  flour: 300,
  water: 210,
  hydration: function() {
    return (loaf.water/loaf.flour)*100;}
};
console.log(loaf.flour, loaf.water);
console.log(loaf.hydration());

const stuff = {foo:'thing', bar:2, fum:3, quux:'other thing', spam:5};

for (let key in stuff) {
  console.log(key, stuff[key]);
}

const eat = {meals: ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']};
console.log(eat.meals[3]);