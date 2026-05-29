console.log('----------------- ARRAYS -----------------');

function first(arr) {
  // TODO: write your code here
}

console.log(first([1, 2, 3])); // 1
console.log(first(['a', 'b'])); // "a"
console.log(first([])); // undefined

//----------------------------------------------------

function last(arr) {
  // TODO: write your code here
}

console.log(last([1, 2, 3])); // 3
console.log(last(['a', 'b'])); // "b"
console.log(last([])); // undefined

//----------------------------------------------------

// Use a loop — no array methods yet
function sum(numbers) {
  // TODO: write your code here
}

console.log(sum([1, 2, 3])); // 6
console.log(sum([10, 20, 30])); // 60
console.log(sum([])); // 0

//----------------------------------------------------

// Use a loop — no .includes() yet
function contains(arr, value) {
  // TODO: write your code here
}

console.log(contains([1, 2, 3], 2)); // true
console.log(contains([1, 2, 3], 5)); // false
console.log(contains(['a', 'b'], 'a')); // true

//----------------------------------------------------

// Returns a new array without the element at index — do not mutate the original
function removeAt(arr, index) {
  // TODO: write your code here
}

const nums = [10, 20, 30];
console.log(removeAt(nums, 1)); // [10, 30]
console.log(nums); // [10, 20, 30]  ← unchanged
