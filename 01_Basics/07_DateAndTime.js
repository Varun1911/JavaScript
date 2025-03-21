//DATES

let myDate = new Date();

// console.log(myDate); 
// console.log(myDate.toString()); 
// console.log(myDate.toDateString()); 
// console.log(myDate.toISOString()); 
// console.log(myDate.toJSON()); 
// console.log(myDate.toLocaleDateString()); 
// console.log(myDate.toLocaleString()); 

let newDate = new Date(2025, 0, 13);    //months start from 0
// console.log(newDate.toDateString());

newDate = new Date(2025, 2, 13);
// console.log(newDate.toLocaleDateString());

newDate = new Date("2025-03-13");
// console.log(newDate.toLocaleString());

newDate = new Date("03-13-2025");
// console.log(newDate.toLocaleString());


let myTimeStamp = Date.now();

// console.log(myTimeStamp);   //milliseconds passed after the date 1 january 1970
// console.log(newDate.getTime());
// console.log(myTimeStamp - newDate.getTime());    //comparing timestamps


console.log(newDate.getDate());
console.log(newDate.getMonth());
console.log(newDate.getFullYear());
console.log(newDate.getDay());


console.log(newDate.toLocaleString('default',
    {
        weekday : "long",
        hour : "2-digit"
    }
));
