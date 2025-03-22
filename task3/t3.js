'use strict';

let numbers = [];
let value = +prompt('Provide me with a number. To quit press Enter.');
if (value == '') {
  console.log('Have a good day.');
} else {
  do {
    numbers.push(value);
    value = +prompt('Provide me with more numbers. To quit press Enter.');
  } while (value != '');
}
document.querySelector('#listTitle').innerHTML = 'All Even Numbers';
for (let num of numbers) {
  if (num % 2 == 0) {
    let point = document.createElement('li');
    let content = document.createTextNode(num);
    point.appendChild(content);
    document.getElementById('allNumbers').appendChild(point);
  }
}
console.log('Program is now finished.');
alert('Program is now finished.');
