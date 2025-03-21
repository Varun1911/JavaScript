const myArr = [12, 12, 4, "23", "sdfe", true];

const arr1 = [1, 2, 4, 6, 7];
const arr2 = ["Varun", "Sahil", "Gitansh"];
const arr3 = new Array(1, 2, 3, 4, 5);

arr1.push(9);     //insert element at last
// console.log(arr1);

arr1.pop();      //remove element from last
// console.log(arr1);

arr1.unshift(0);    //adds element at the start of the array
                    //it has to shift all the elements to insert in the beginning
// console.log(arr1);

arr1.shift();
// console.log(arr1);   //removes element from the start

// console.log(arr1.includes(4));   //true
// console.log(arr1.indexOf(4));   //2
// console.log(arr1.indexOf(12));  //-1 -> implying that the element doesn't exist


const newArr = arr1.join();     //adds all elements of the array into a string 

// console.log(newArr);    
// console.log(typeof newArr);

console.log(arr1.map((x) => x*2)); 

