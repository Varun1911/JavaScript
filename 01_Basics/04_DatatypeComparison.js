
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



