console.log('----------------- SCOPE -----------------');

console.log('PROBLEM 1:\n');

// Returns a function that increments and returns a count each time it's called
function makeCounter() {
  let count = 1;
  return function() {
    console.log(count);
    count++;
  }
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = makeCounter();
console.log(counter2()); // 1  ← independent from counter

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 2:\n');

// Returns a function that adds x to whatever number is passed in
function makeAdder(x) {
  return function(n) {
    return n + x; // x is captured from the outer scope — this is a closure
  }
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3)); // 8
console.log(add10(3)); // 13
console.log(add5(7)); // 12
console.log(add5()); // NaN
console.log(add10(undefined)); // NaN
console.log(add5(NaN)); // NaN
console.log(add5(null)); // 5 - null is falsy so it is treated as 0

// CORRECT

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 3:\n');

// Predict the output — does var or let behave differently in a loop?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 0);
  //console.log(i);
}
// var: 3
// var: 3
// var: 3
// WHY: var is function-scoped — there is only ONE `i` shared across all iterations.
//      By the time the callbacks run (after the loop finishes), i is already 3.

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 0);
  //console.log(j);
}
// let: 0
// let: 1
// let: 2
// WHY: let is block-scoped — each loop iteration gets its OWN copy of j.
//      Each callback closes over a different j, so they each remember their own value.

// 

console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 4:\n');

// --- Hoisting Part 1: var vs. function declaration ---
// Predict what each line logs. Write your prediction as a comment, then run to check.
//
// Key concept: JavaScript "hoists" declarations to the top of their scope before
// running. var is hoisted but its value is not — it starts as undefined.
// Function declarations are hoisted with their full body.

console.log(typeof hoisted); // "undefined"  ← var declaration hoisted, but value isn't assigned yet
var hoisted = 'hello';
console.log(typeof hoisted); // "string"  ← now the assignment has run

sayHello(); // "hello from sayHello"  ← YES, works! function declarations are fully hoisted
function sayHello() {
  console.log('hello from sayHello');
}

// greet();  // ReferenceError: Cannot access 'greet' before initialization
//           // const/let are hoisted but NOT initialized — accessing them before
//           // their line is the "temporal dead zone" (TDZ)
const greet = () => console.log('hello from greet');



console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 5:\n');

// --- Hoisting Part 2: var declared mid-block ---
// Predict all three logs before running.
// Remember: the declaration is hoisted, but the assignment is not.

console.log(score); // undefined  ← var is hoisted: JS knows `score` exists, but hasn't assigned 42 yet
var score = 42;
console.log(score); // 42



console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 6:\n');

// --- Hoisting Part 3: function declaration vs. function expression ---
// One of these calls succeeds, one throws a ReferenceError or TypeError.
// Predict which is which and explain why in a comment.

runA(); // "runA called"  ← works! function DECLARATION is fully hoisted with its body

// runB(); // TypeError: runB is not a function
//         // var runB is hoisted, but its value at this point is undefined.
//         // Calling undefined() throws a TypeError (not a ReferenceError).

function runA() {
  console.log('runA called');
}

var runB = function () {
  console.log('runB called');
};



console.log('\n\n');

//----------------------------------------------------
console.log('PROBLEM 7:\n');

// --- Hoisting Part 4: variable shadowing inside a function ---
// The inner var color is hoisted to the TOP of printColor().
// Predict all three logs before running — the middle one is the tricky one.

var color = 'blue';

function printColor() {
  console.log(color); // undefined  ← the inner `var color` is hoisted to the TOP of this
                      //               function, SHADOWING the outer `color` before it's assigned
  var color = 'red';
  console.log(color); // "red"
}

printColor();
console.log(color); // "blue"  ← the outer variable was never touched; var inside a function
                    //            is scoped to that function only
