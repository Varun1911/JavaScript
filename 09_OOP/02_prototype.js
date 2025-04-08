function multBy5(num)
{
    return num * 5;
}

multBy5.power = 2;

// console.log(multBy5(3));
// console.log(multBy5.power);
// console.log(multBy5.prototype);

function User(name, age)
{
    this.name = name;
    this.age = age;
}

User.prototype.getFirstLetter = function()
{
    return this.name[0];
}

Object.defineProperty(User.prototype, "nameLength", {
    get : function()
    {
        return this.name.length;
    }
});

const user1= new User("Varun", 35);
//new keyword injects all the properties of prototype in the object intance

// console.log(User.prototype)
// console.log(user1.nameLength);


// ========================================

let name = "Varun        ";

//create a mehtod trueLength which gives us the length without the white spaces


const myArr = [1,2,3];

const myObj = {
    username : "Varun",
    age : 25,
    gender : "Male"
}

Object.prototype.hello = function(name)
{
    console.log(`Hello ${name}`);
}

// myArr.hello("Varun");
// myObj.hello("there!");


// ========================================

//prototypal Inheritance 

//old syntax
const Users = { 
    username : "varun",
    email : "varun@gmail.com"
} 
const Teacher = {makeVideos : true};
const TeachingSupport = {isAvailable : false};
const TASupport = {
    makeAssignment : 'JS Assignment',
    fullTime : true,
    __proto__ : TeachingSupport
}


Teacher.__proto__ = Users;


//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);


String.prototype.trueLength = function()
{
    console.log(`${this}`);
    console.log(`True length is ${this.trim().length}`);
}

name.trueLength();
"HelloThere".trueLength();