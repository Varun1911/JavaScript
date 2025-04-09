// console.log(Math.PI);
// Math.PI = 5;
// console.log(Math.PI);

const descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(descriptor);
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
// }


const user = {
    name : "Varun",
    age : 25,
    gender : "Male"
};

// console.log(Object.getOwnPropertyDescriptor(user, "gender"));

Object.defineProperty(user, 'gender', {
    writable : false,
    enumerable : false,
})

// console.log(Object.getOwnPropertyDescriptor(user, "gender"));

user.gender = "Female";

// console.log(user.gender);   //Male


for (const [key, value] of Object.entries(user)) {
    console.log(`${key} : ${value}`);

}