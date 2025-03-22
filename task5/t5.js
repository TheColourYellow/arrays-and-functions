'use strict';
function sortArray(numbers, order) {
  if (order == 'asc') {
    return numbers.sort(function (a, b) {
      return a - b;
    });
  } else if (order == 'desc') {
    return numbers.sort(function (a, b) {
      return b - a;
    });
  } else {
    console.log('Did not recongnize input.');
  }
}

const numbers = [1, 10, 19, 22, 7, 15, 3, 23, 17, 5];
const numbers2 = [5, 2, 8, 1, 9];

console.log(sortArray(numbers, 'asc'));
console.log(sortArray(numbers, 'desc'));
console.log(sortArray(numbers, 'ascc'));

console.log(sortArray(numbers2, 'asc'));
console.log(sortArray(numbers2, 'desc'));
