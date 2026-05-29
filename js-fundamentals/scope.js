console.log('----------------- SCOPE -----------------');

// Returns a function that increments and returns a count each time it's called
function makeCounter() {
  // TODO: write your code here
}

const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

const counter2 = makeCounter();
console.log(counter2()); // 1  ← independent from counter

//----------------------------------------------------

// Returns a function that adds x to whatever number is passed in
function makeAdder(x) {
  // TODO: write your code here
}

const add5 = makeAdder(5);
const add10 = makeAdder(10);

console.log(add5(3)); // 8
console.log(add10(3)); // 13
console.log(add5(7)); // 12

//----------------------------------------------------

// Predict the output — does var or let behave differently in a loop?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log('var:', i), 0);
}
// var: ?
// var: ?
// var: ?

for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log('let:', j), 0);
}
// let: ?
// let: ?
// let: ?

//----------------------------------------------------

// Predict what each line logs, then explain hoisting in a comment
console.log(typeof hoisted); // ?
var hoisted = 'hello';

sayHello(); // ?
function sayHello() {
  console.log('hello from sayHello');
}

// greet();  // uncomment — what error do you get and why?
const greet = () => console.log('hello from greet');
