'use strict';
//Step I
let numbers = [];

//Step II
while (numbers.length < 5) {
  let number = +prompt('Provide me with a number.');
  numbers.push(number);
}

//Step III
console.log(numbers);

//Step IV
const numberTest = +prompt('Enter any number.');
const includesNumber = numbers.includes(numberTest);

//Step V
if (includesNumber) {
  console.log('This number is on the list.');
} else {
  ('This number is not on the list.');
}

//Step VI
numbers.pop();

//Step VII
console.log(numbers);

//Step VIII
numbers.sort(function (a, b) {
  return a - b;
});

//Step IX
console.log(numbers);
