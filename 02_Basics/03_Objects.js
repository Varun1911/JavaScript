//singleton -> only with constructors not with literals
//Object.create -> constructor

//Object literals

//keys are considered as string by the system, you dont have to explicitly mention that

const mySym = Symbol("Key1");

const user = 
{
    name : "Varun",
    age : 25,
    location : "Delhi",
    email : "varun@gmail.com",
    [mySym] : "mySymbol"
};

//accessing an object value
// console.log(user.name);
// console.log(user["name"]);
// console.log(user[mySym]);


user.email = "varun.t@makear.ai";
// console.log(user.email);

// Object.freeze(user);
//user object cannot be modified now
user.email = "varun.t@gmail.com";   //this change won't reflect in the object 
// console.log(user.email);

user.greeting = function()
{
    console.log(`Hello there ${this.name}!`);
}

user.greeting();

