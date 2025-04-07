const user = {
    username : "Varun",
    loginCount : 8,
    signedIn : true,
    getUserDetials : function(){
        console.log("Got details!");
    }
};

// user.getUserDetials();


//What if I need to make another user with the same structure


// const user2 = {
//     username : "Varun Taneja",
//     loginCount : 18,
//     signedIn : true,
//     getUserDetials : function(){
//         console.log("Got details from user2");
//     }
// };

function User(name, age, greeting)
{
    this.username = name;
    this.age = age;
    this.greeting = function(){
        console.log(greeting);
    };
}


const person1 = new User("Varun", 25, "Hello there!");
// console.log(person1);

const person2 = new User("Harshi", 23, "Helloooo!");
// person2.greeting();

console.log(person1 instanceof User);
