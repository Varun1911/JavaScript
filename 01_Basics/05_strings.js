let username = "Varun";
let age = 25;

// console.log("Hello my name is " + username + " and my age is " + age);
// console.log(`Hello my name is ${username} and my age is ${age}`);   //this is called string interpolation

const ign = new String("Krea-cher");

// console.log(ign.charAt(4));
// console.log(ign[4]);
// console.log(ign.length);            //9
// console.log(ign.toUpperCase());     //does not change original string cause strings are call by value
// console.log(ign.indexOf("r"));      //1
// console.log(ign.indexOf("k"));      //indexOf is case sensitive | output: -1
// console.log(ign.indexOf("che"));    //5

let str1 = ign.substring(0, 4);
// console.log(str1);      //Krea

const str2 = ign.slice(-7,4);   //slice can accept negative values which means start from behind 
console.log(str2);  //ea


str1 = ign.substring(-7,4);   //substring does not accept negative values and if you pass negative values it will treat it as 0
console.log(str1);  //ea


// console.log(ign.replace("r", "n"));     //knea-cher
console.log(ign.replaceAll("r", "n"));

let string1 = "    Varun  ";

// console.log(string1.length);    //11
string1 = string1.trim();       //removes all the spaces in the string
// console.log(string1)            //Varun
// console.log(string1.length);    //5

console.log(ign.includes("Kr"));    //true  (case sensitive)

let stringArr = ign.split('-');
console.log(stringArr);
