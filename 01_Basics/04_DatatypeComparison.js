
// console.log("2" > 1);    //true
// console.log("02" > 1);   //true

//JS implicitly converted "2" and "02" to a number
//But we should not compare different datatypes as the results are not predictable


console.log(null > 0);  //false
console.log(null == 0);  //false
console.log(null >= 0);  //true

//equality check (==) and comparisons (>, <, >=, <=) work differently
//comparison covert null to a number, treating it as 0

//Strict check ===
console.log("2" == 2);
console.log("2" === 2);


const val = Symbol("123");
const val2 = Symbol("123");

console.table([val, typeof(val)]);
console.table([val2, typeof(val2)]);
console.log(val == val2);   //false


const heroes = ["ironman", "hulk", "thor", "hawkeye"];

//object
const student = 
{
    name : "Varun",
    age : 25,
    rollNo : 45
}


const myFun = function()
{
    console.log("HelloWorld");
}

console.log(typeof myFun);
console.log(typeof heroes);
console.log(typeof student);
