console.log('----------------- OBJECTS -----------------');

function getFullName(person) {
  // TODO: write your code here
}

console.log(getFullName({ firstName: 'Ada', lastName: 'Lovelace' })); // "Ada Lovelace"
console.log(getFullName({ firstName: 'Grace', lastName: 'Hopper' })); // "Grace Hopper"

//----------------------------------------------------

function isAdult(person) {
  // TODO: write your code here
}

console.log(isAdult({ name: 'Alice', age: 20 })); // true
console.log(isAdult({ name: 'Bob', age: 17 })); // false
console.log(isAdult({ name: 'Sam', age: 18 })); // true

//----------------------------------------------------

function introduce(person) {
  // TODO: write your code here
}

console.log(introduce({ name: 'Ada', role: 'engineer', company: 'ACME' }));
// "Hi, I'm Ada — engineer at ACME."

console.log(introduce({ name: 'Grace', role: 'architect', company: 'IBM' }));
// "Hi, I'm Grace — architect at IBM."

//----------------------------------------------------

function countProperties(obj) {
  // TODO: write your code here
}

console.log(countProperties({ a: 1, b: 2, c: 3 })); // 3
console.log(countProperties({})); // 0
console.log(countProperties({ name: 'Ada' })); // 1

//----------------------------------------------------

// Returns a new object containing only the specified keys
function pick(obj, keys) {
  // TODO: write your code here
}

console.log(pick({ name: 'Ada', age: 30, role: 'dev' }, ['name', 'role']));
// { name: 'Ada', role: 'dev' }

console.log(pick({ a: 1, b: 2, c: 3 }, ['a', 'c']));
// { a: 1, c: 3 }
