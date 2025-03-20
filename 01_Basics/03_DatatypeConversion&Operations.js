let age = 25;
let score = "33";

// console.log(typeof age);    //number
// console.log(typeof score);  //string

let scoreInNum = Number(score);

// console.log(typeof(scoreInNum));    //number


let string = "abc35";
let num = Number(string);

// console.log(typeof(num));   //number
// console.log(num);   //NAN


let variable = null
num = Number(variable);

// console.log(num);   //0

let boolean = true;
num = Number(boolean);

// console.log(num);   //1


let isLoggedIn = -23;

let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);     //true

isLoggedIn = "Varun34";
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);     //true

isLoggedIn = "";
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);     //false

isLoggedIn = null;
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);  //false


isLoggedIn = undefined;
booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);     //false


let value = 35;
let stringValue = String(value);

// console.log(stringValue);   //35
// console.log(typeof(stringValue));   //string

value = true;
stringValue = String(value);

// console.log(stringValue);   //true
// console.log(typeof(stringValue));   //string


// ==================== Operations ===========================

console.log(2**4);  //2^4;

// let str1 = "Hello";
// let str2 = " Varun!";

// console.log(str1 + str2);

console.log("1" + 2);   //12
console.log(1 + "2");   //12
console.log("1" + "2"); //12

console.log("1" + 2 + 3);   //123
console.log(1 + 3 + "2");   //42
console.log(1 + 3 + "2" + 2 + 5);   //4225


let num1, num2, num3;
num1 = num2 = num3 = 2 + 2;

console.table([num1, num2, num3]);

console.log(++num);
console.log(num++);


