let age = 25;
let score = "33";

console.log(typeof age);
console.log(typeof score);

let scoreInNum = Number(score);

console.log(typeof(scoreInNum));


let string = "abc35";
let num = Number(string);

console.log(typeof(num)); //number
console.log(num);  //NAN


let variable = null
num = Number(variable);

console.log(num); //0

let boolean = true;
num = Number(boolean);

console.log(num); //1


let isLoggedIn = -23;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = "Varun34";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

isLoggedIn = null;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


isLoggedIn = undefined;
booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);


let value = 35;
let stringValue = String(value);

console.log(stringValue);
console.log(typeof(stringValue));

value = true;
stringValue = String(value);

console.log(stringValue);
console.log(typeof(stringValue));