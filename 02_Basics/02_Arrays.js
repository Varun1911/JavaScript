const marvel = ["Ironman", "Captain America", "Spiderman"];
const dc = ["Superman", "Batman", "Aquaman"];

// marvel.push(dc)
//we wanted to append the elements of dc into marvel but push operation appends the whole array as one element 

// console.log(marvel);

// To append all the elements of dc into marvel we will use concat method
const heroes = marvel.concat(dc);

// console.log(heroes);


//Another way of combining elements of two or more arrays is to use the spread operator(...).

const new_heroes = [...marvel, ...dc, ...heroes];
// console.log(new_heroes);


const arr1 =[1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const flatArr1 = arr1.flat(Infinity);
// console.log(flatArr1);


console.log(Array.isArray("Varun"));
console.log(Array.from("Varun"));


console.log(Array.from({
    name : "Varun"
}));    
//won't be able to convert into array unless we mention that just make an array from keys only or values only



let score1 = 100;
let score2 = 200;
let score3 = 300;


console.log(Array.of(score1, score2, score3));



