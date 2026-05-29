console.log('----------------- REFERENCE VS VALUE -----------------');

// Predict what logs, then explain why in a comment
let x = 5;
let y = x;
y = 99;

console.log(x); // ?
console.log(y); // ?

//----------------------------------------------------

// Predict what logs, then explain why in a comment
const obj1 = { score: 10 };
const obj2 = obj1;
obj2.score = 99;

console.log(obj1.score); // ?
console.log(obj2.score); // ?
console.log(obj1 === obj2); // ?

//----------------------------------------------------

// Returns a copy of obj — the original must not change
function safeCopy(obj) {
  // TODO: write your code here
}

const original = { name: 'Ada', score: 92 };
const copy = safeCopy(original);
copy.score = 100;

console.log(original.score); // 92
console.log(copy.score); // 100
console.log(original === copy); // false

//----------------------------------------------------

// Returns a new student with the tag added — do not mutate the original
function addTag(student, tag) {
  // TODO: write your code here
}

const student = { name: 'Lin', tags: ['css'] };
const updated = addTag(student, 'mentor');

console.log(updated.tags); // ['css', 'mentor']
console.log(student.tags); // ['css']  ← unchanged

//----------------------------------------------------

// Returns a new student with an updated score — do not mutate the original
function updateScore(student, newScore) {
  // TODO: write your code here
}

const ada = { name: 'Ada', score: 92 };
const promoted = updateScore(ada, 97);

console.log(ada.score); // 92  ← unchanged
console.log(promoted.score); // 97
