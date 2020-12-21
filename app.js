alert("hello");

// Numbers
const day = 5;

// Check data type of day
console.log(typeof day);

// Strings
const firstName = "Bob";
console.log(typeof firstName);

// Booleans (either true or false)
// const isLoggedIn = true;
// const isLoggedIn = false;

// Undefined
// Remember const requires a value to be assigned to it
// const time;

// Variable with no value assignmed to it is undefined
let minutes;

// Null
// We explicity assign the value of nothing (value of nothing)
let seconds = null;

/* Symbol
// Mainly used for like libraries, 
// basically used for unique identifiers inside object
 to not collide with other properties */

const name = Symbol();

// OBJECT

// Concatentation
const bank1 = 20;
const bank2 = 50;

console.log(bank1 + bank2);

const greeting = "Welcome to our website";
const user = " Bob";

console.log(greeting + user);

// opposite quote
// But using '' causes issues with punctuation it's
const greeting2 = "Bob said 'I am hungry!' ";
console.log(greeting2);

// escaping quote
const greeting3 = 'Bob said "I am full!" ';
console.log(greeting3);

const greeting4 = `Hey there my name is Bob. It's a nice day. "Said Bobbt".`;
console.log(greeting4);

const greetingMain = `Hey there welcome to our ${user}`;
console.log(greetingMain);
