console.log('----------------- ARRAYS -----------------');

console.log('PROBLEM 1:\n');

function first(arr) {
  // TODO: write your code here
  return arr[0];
}

console.log(first([1, 2, 3])); // 1
console.log(first(['a', 'b'])); // "a"
console.log(first([])); // undefined
console.log(first([,])); // undefined
console.log(first([null])); // null

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 2:\n');

function last(arr) {
  // TODO: write your code here
  return arr[arr.length - 1];
}

console.log(last([1, 2, 3])); // 3
console.log(last(['a', 'b'])); // "b"
console.log(last([])); // undefined
console.log(last([,])); // undefined
console.log(last([null])); // null

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 3:\n');

// Use a loop — no array methods yet
function sum(numbers) {
  // TODO: write your code here
  let result = 0;

  for (let i = 0; i < numbers.length; ++i) {
    if (!isNaN(numbers[i])) {
      result += numbers[i];
    }
  }
  return result;
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 20, 30])); // 60
console.log(sum([])); // 0
console.log(sum([,null,])); // 0
console.log(sum([,,NaN])); // 0

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 4:\n');

// Use a loop — no .includes() yet
function contains(arr, value) {
  // TODO: write your code here
  for (let i = 0; i < arr.length; i++) {
    if ((arr[i] === value) || Number.isNaN(arr[i])) return true;
  }
  return false;
}

console.log(contains([1, 2, 3], 2)); // true
console.log(contains([1, 2, 3], 5)); // false
console.log(contains(['a', 'b'], 'a')); // true
console.log(contains([,], undefined)); // true
console.log(contains([,null, undefined], null)); // true
console.log(contains([,null, undefined], undefined)); // true
console.log(contains([null, NaN, undefined], NaN)); // true

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 5:\n');

// Returns a new array without the element at index — do not mutate the original
function removeAt(arr, index) {
  // TODO: write your code here
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (i !== index) newArr.push(arr[i]);
  }
  return newArr;
}

const nums = [10, 20, 30];
console.log(removeAt(nums, 1)); // [10, 30]
console.log(nums); // [10, 20, 30]  ← unchanged

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 6:\n');

// Returns a single flat array from an array of arrays (one level deep)
// Example: [[1, 2], [3, 4], [5]] → [1, 2, 3, 4, 5]
// Hint: loop through the outer array, then loop through each inner array
function flatten(arrays) {
  // TODO: write your code here
  let result = [];

  for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++) result.push(arrays[i][j]);
  }
  return result;
}

console.log(flatten([[1, 2], [3, 4], [5]])); // [1, 2, 3, 4, 5]
console.log(flatten([['a', 'b'], ['c']]));   // ['a', 'b', 'c']
console.log(flatten([]));                    // []

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 7:\n');

// Given TWO arrays, return a new array containing only elements
// that appear in BOTH arrays (no duplicates in the result).
// Hint: loop through one array and check if each element exists in the other.
//       You can reuse the logic from your contains() function above.
function intersection(arrA, arrB) {
  // TODO: write your code here
  let result = [];

  for (let i = 0; i < arrA.length; i++) {
    if (contains(arrB, arrA[i])) result.push(arrA[i]);
  }
  return result;
}

console.log(intersection([1, 2, 3], [2, 3, 4]));            // [2, 3]
console.log(intersection(['a', 'b', 'c'], ['b', 'c', 'd'])); // ['b', 'c']
console.log(intersection([1, 2], [3, 4]));                   // []

// CORRECT