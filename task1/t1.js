'use strict';
// Step I
const fruits = ['Apple', 'Banana', 'Orange', 'Grape', 'Kiwi'];
//Step II Method 1
console.log(fruits);
//Step II Method 2
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//Step III
const fruitsLength = fruits.length;
console.log("Length of array 'fruits'" + fruitsLength);
//Step IV
const indexTwo = fruits[2];
console.log('At third place: ' + indexTwo);
//Step V
console.log('At last place: ' + fruits[fruitsLength - 1]);
//Step VI
let vegetables = [];
//Step VII
while (vegetables.length < 3) {
  let vegetable = prompt('Give me a vegetable.');
  vegetables.push(vegetable);
}
//Step VIII
console.log(vegetables);
//Step IX
const vegetablesLen = vegetables.length;
console.log('Vegetables length: ' + vegetablesLen);
