'use strict';
function sortArray(array) {
  return array.sort(function (a, b) {
    return a - b;
  });
}

const numbers = [1, 10, 19, 22, 7, 15, 3, 23, 17, 5];
console.log(numbers);
console.log(sortArray(numbers));
