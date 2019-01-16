/* eslint-disable no-console */
'use strict';


function createMyObject() {

  return { 
    foo: 'bar',
    answerToUniverse: 42,
    'olly olly': 'oxen free',
    sayHello: function() {
      return 'hello';
    }
  };
}

function updateObject(obj) {
  // if (typeOf obj === 'object') {
  obj.foo = 'foo';
  obj.bar = 'bar';
  obj.bizz = 'bizz';
  obj.bang = 'bang';
  return obj;
}

function personMaker() {
  var person = {
    firstName: 'Paul',
    lastName: 'Jones',
    // replace `null` with a function that uses self reference to return
    // full name
    fullName: function () { 
      return `${this.firstName} ${this.lastName}`;
    }
  };
  return person;
}

const sampleObj = {
  foo: 'foo',
  bar: 'bar',
  bizz: 'bizz',
  bang: 'bang',
};

function keyDeleter(obj) {
  // your code here
  delete obj.foo;
  delete obj.bar;
  return obj;
}


function makeStudentsReport(data) {
let studentReport = [];
for (student in data) {
studentReport.push(`${data[student].name}: ${data[student].grade}`);
  }
return studentReport;
}


function enrollInSummerSchool(students) {

for (index in students) {
students[index].status = 'In Summer school';
  }
return students;
}

function findById(items, idNum) {

for (entry in items) {
if (items[entry].id === idNum) {
return items[entry];
    }  
  }
}


function validateKeys(object, expectedKeys) {

  const objectkeys = Object.keys(object);
  for (key in objectkeys) {
    if (!expectedKeys.includes(key)) {
      return false;
    }
  }
  return true;
}











