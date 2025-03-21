const score = 300;

const balance = new Number(300);    //You can explicitly define the datatype    

// console.log(score);  
// console.log(balance);   //[Number: 300]
// console.log(balance.toString());    

const num1 = new Number(404.35);
// console.log(num1.toFixed(1));   //input -> number of decimal places you want in the output.Rounds off the last digit
                                //output -> 404.4

const num2 = 21.85647
// console.log(num2.toPrecision(3));   //Format a number to a specified length. It will round off the last digit.
                                       //ouput -> string : 21.9
let num3 = 123.5355;
// console.log(num3.toPrecision(3));   //124

num3 = 1123.5666;
// console.log(num3.toPrecision(3));   //1.12e+3

num3 = 0.00345755;
// console.log(num3.toPrecision(3));   //0.00346


num3 = 1000000000;
// console.log(num3.toLocaleString());         //1,000,000,000
// console.log(num3.toLocaleString('en-IN'));  //1,00,00,00,000



//==================== MATHS =================================

// console.log(Math.abs(-34));     //absolute value 
// console.log(Math.round(3245.234));      //round off
// console.log(Math.ceil(4.4));    //5
// console.log(Math.floor(4.9));   //4
// console.log(Math.sqrt(16));     //square root, 4
// console.log(Math.pow(2,5));    //32
// console.log(Math.min(2,3,5,1,5,6));     //1 -> min value in the array 
// console.log(Math.max(2,3,5,1,5,6));     //6 -> max value in the array


console.log(Math.random());     //gives a random value in the range [0, 1)



//Generating a random number between a given range
const min = 1;
const max = 6;


for (let i = 0; i < 20; i++) 
{
    const randomNum = Math.floor((Math.random() * (max - min + 1)) + min);
    console.log(randomNum);
}

