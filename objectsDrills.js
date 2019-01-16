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

const person1 = {name:'joe', jobTitle:'CSR', boss: 'sam' };
const person2 = {name:'bob', jobTitle:'CTO', boss: 'sam' };
const person3 = {name:'sam', jobTitle:'CEO' };

const directory = [person1, person2, person3];
for(let i in directory){
  if ('boss' in directory[i]) {
    console.log(`${directory[i].jobTitle} ${directory[i].name} reports to ${directory[i].boss}.`);
  }
  else {
    console.log(`${directory[i].jobTitle} ${directory[i].name} doesn't report to anybody.`);
  }
}

const encrypt = {
  a: 2,
  b: 3,
  c: 4,
  d: 5
}

function decode(word) {
  for (let key in encrypt) {
    if (word.charAt(0) === key) {
      word = word.charAt([encrypt[key]] - 1);
      return word;
      }
     }
   return ' ';
}

function decodeWords(message) {

let newMessage = "";
let encode = message.split(' ');
for (let i in encode) {
newMessage += decode(encode[i]);
}
return newMessage;
}

console.log(decodeWords('craft block argon meter bells brown croon droop'));


function createCharacter(name, nickname, race, origin, attack, defense) {

return {
  name,
  nickname,
  race,
  origin,
  attack,
  defense,
  describe: function() { return `${name} is a ${race} from ${origin}.` },
  evaluateFight: function(character) { 
  let x = character.defense > this.attack ? 0 : this.attack - character.defense;
  let y = this.defense > character.attack ? 0 : character.attack - this.defense;
  return `Your opponent takes ${x} damage and you receive ${y} damage`;},
  }
}

const LOTR = [];
LOTR.push(createCharacter('Gandalf the White', 'gandalf', 'Wizard', 'Middle Earth', 10, 6)); 
LOTR.push(createCharacter('Bilbo Baggins', 'bilbo', 'Hobbit', 'The Shire', 2, 1));
LOTR.push(createCharacter('Frodo Baggins', 'frodo', 'Hobbit', 'The Shire', 3, 2));
LOTR.push(createCharacter('Aragorn son of Arathorn', 'aragorn', 'Man', 'Dunnedain', 6, 8));
LOTR.push(createCharacter('Legolas', 'legolas', 'Elf', 'Woodland Realm', 8, 5));
LOTR.push(createCharacter('Arwen Undomiel', 'arwen', 'Half-Elf', 'Rivendell', 9, 4));
console.log(LOTR);

console.log(LOTR.find((char)=> char.nickname === 'aragorn').describe());

const hobbits = LOTR.filter()








