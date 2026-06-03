console.log('----------------- TYPES -----------------');

console.log('PROBLEM 1:\n');

// Returns a string describing the type — handles the null and array edge cases
function getType(value) {
  // TODO: write your code here
  return typeof(value);
}

console.log(getType(42)); // "number"
console.log(getType('hello')); // "string"
console.log(getType(true)); // "boolean"
console.log(getType(undefined)); // "undefined"
console.log(getType(null)); // "null"       ← typeof null === "object"!
console.log(getType([])); // "array"      ← typeof [] === "object"!
console.log(getType({})); // "object"
console.log(getType(() => {})); // "function"

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 2:\n');

// Returns true only if value is a number and not NaN
function isNumber(value) {
  // TODO: write your code here
  if (getType(value) === 'number' && !isNaN(value))
    return true;
  else
    return false;
}

console.log(isNumber(5)); // true
console.log(isNumber(NaN)); // false  ← typeof NaN === "number"!
console.log(isNumber('5')); // false
console.log(isNumber(Infinity)); // true

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 3:\n');

// Predict true or false before running each line, then explain why in a comment
console.log(Boolean(0)); // false - the number 0 is falsy
console.log(Boolean('')); // false - empty strings are falsy
console.log(Boolean(null)); // false - null is falsy
console.log(Boolean(undefined)); // false - undefined is falsy
console.log(Boolean(NaN)); // false - NaN is falsy
console.log(Boolean(false)); // false - false is false
console.log(Boolean('0')); // true - the string is not empty so it's truthy
console.log(Boolean([])); // true - arrays (including empty ones) are objects and objects are truthy
console.log(Boolean({})); // true - objects (including empty ones) are truthy

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 4:\n');

// Predict the output, then add a comment explaining why
console.log(1 == '1'); // true - because == doesn't compare types
console.log(1 === '1'); // false - because === compares types
console.log(null == undefined); // true - because == doesn't compare types
console.log(null === undefined); // false - because === compares types
console.log(0 == false); // true - because == doesn't compare types and the number 0 is falsy
console.log('' == false); // true - because == doesn't compare types and an empty string is falsy

// CORRECT