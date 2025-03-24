const obj1 = {};

obj1.id = "#1234";
obj1.name = "Varun";
obj1.isActive = false;

const obj2 = 
{
    email : "email@gmail.com",
    fullname : 
    {
        userFullName : 
        {
            firstName : "Varun",
            lastName : "Taneja"
        }
    }
}

//we can nest as many objects as we want

// console.log(obj2.fullname.userFullName.firstName);


const obj3 = Object.assign({}, obj1, obj2); 
//assigns all values of obj1 and obj2 to an empty object and returns it
//if we provide obj1 as target i.e the first parameter then the output would be same but obj1 would also be modified
// console.log(obj3);
// console.log("==================================");

const obj4 = {...obj1, ...obj2};
// console.log(obj4);

// console.log(Object.keys(obj1));
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1));
    //returns an array of strings(keys)

console.log(obj1.hasOwnProperty('email'));  //false
console.log(obj1.hasOwnProperty('id'));     //true



