Every language has a software which understands the syntax structure of the language. Ex - interpreter, compiler.
For years this software for JS was inside the browsers. But now it's easily available so now we can execute JS standalone. Now JS is not just a browser/frontend language.
NodeJS is one the environments which helps us execute JS. DinoJS is also onw of them.

console.table([ele1, ele2, ele3 .....]) -> prints a table with all the provided varibales in the console 

<b>const</b> -> constant i.e cannot be changed/updated.

varibales can be declared in 2 ways - let and var

<b>var</b> is not used because it has function scope.<br> 
<u>Problems</u> -<br> 
<b>Function</b> Scope: It ignores block scope, causing unintended access.<br />
<b>Hoisting Issues</b>: It’s hoisted as undefined, leading to bugs.<br />
<b>Global Pollution</b>: It can accidentally create global variables.

<b>let</b> -> used to declare varibales. let has a block scope.

You may also declare a varibale without using let/var by just writing the name of the varible. Although possible, do not use this method as these varibles have global scope.<br />
<b>Global Pollution</b>: Variables declared this way become global, which can lead to naming conflicts and unpredictable behavior.<br />
<b>No Block Scope</b>: These variables don’t respect block scope, which can lead to bugs.<br />
<b>Silent Errors</b>: Mistakes like typo errors won't throw a clear error and might result in unintended behavior.


**Hoisting** in JavaScript is the behavior where **variable** and **function declarations** are moved to the **top of their scope** during the compile phase.  
- **`var`** is hoisted and initialized to `undefined`.  
- **`let`** and **`const`** are hoisted but remain **uninitialized** (in the **temporal dead zone**).  
- **Function declarations** are fully hoisted, meaning they can be called before their definition.

<br />
Earlier JS did not have classes, modules, arrow functions etc. If we write "use sctrict" in quotes, our code will be treated as the newer version of JS. This keeps the old code also compatible in the browsers 
<br /><br />
<br />
<b>Type Conversion to a number</b>
<br />
"33" => 33
<br />
"33abc" => NAN
<br />
null => 0
<br />
true => 1
<br />
undefined => NAN
<br />

<br />
<b>Type Conversion to a boolean</b>
<br />
"" => false
<br />
"abc" => true
<br />
null => false
<br />
undefined => false
<br />
any number other than 0 => true
<br />
0 => false
<br />
<br />

Equality check (==) and comparisons (>, <, >=, <=) work differently, comparison covert null to a number, treating it as 0

Strict Check (===) -> this also checks the data type of the values compared and would not perform conversion

We should not compare different datatypes as the results are not predictable


<b>Primitive Datatypes</b><br />
These are call by value<br />
7 types - string, number, boolean, null, undefined, symbol, bigInt
<br />
symbol is used to make any value unique

<b>Non-Primitive Datatypes</b><br />
These are call by reference<br />
Arrays, Objects, Functions


<b>Stack and Heap memory</b><br />
All primitive types use stack memory
Non-Primitive types use heap memory 


Strings have characters and indeces in a key value pair in js (not an array) <br />
"Var" <br />
0->V <br />
1->a <br />
2->r <br />



<h1> Arrays </h1>
Arrays are resizable in JS.
<br /> Arrays may contain a mix of datatypes.
<br /> Array copy operations create a shallow copy (call by reference)

arr1.unshift(0);    
//adds element at the start of the array <br /><br />
arr1.shift();       
//removes element from the start <br /><br />
const newArr = arr1.join();     
//adds all elements of the array into a string <br /><br />
arr1.map((x) => x*2)               
//The map() method of Array instances creates a new array populated with the results of calling a provided function on every element in the calling array.<br /><br />
arr1.slice(1,3) 
//slice is like substring method of strings. The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included).<br />
Strings can also use slice but the difference is-

Negative Indexes

    slice() supports negative indexes (counts from the end).
    substring() treats negative indexes as 0.

Order of Parameters

    slice() keeps the order of parameters (start, end).
    substring() swaps the values if start > end.


arr.splice(1,3) -> <br />
//The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place
<br /><br />
const newArr = arr1.concat(arr2)<br />
//The concat method appends all elements of arr2 to arr1 and returns a new array with all the elements <b>without</b> modifying the original arrays.<br /><br />
const newArr1 = arr1.flat(3);<br />
//Returns a new array with all sub-array elements concatenated into it recursively up to the specified depth. If we don't know the depth and want to flatten the complete array, we can give Infinity as depth.
<br /><br />
Array.from()<br />
//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object. It will return an empty array if it is unable to convert
<br />

<h1> Objects</h1>
Objects can be created in 2 ways - Constructor and Literals.<br />
Singleton - objects that have only a single instance. Singletons can only be creted using constructor method.<br /><br />

<b>Object literals</b>
<br />
const user = <br />
{<br />
    name : "Varun",<br />
    age : 25,<br />
    location : "Delhi",<br />
    email : "varun@gmail.com",<br />
};
<br /><br />
//keys are considered as string by the system, you dont have to explicitly mention that.<br /><br />
accessting values<br />
console.log(user.name);&nbsp; &nbsp;    //Varun<br />
console.log(user["name"]);&nbsp; &nbsp; //Varun<br />

using Symbol as a key in object<br />
const mySym = Symbol("key1");
const user = <br />
{<br />
    &nbsp; &nbsp;[mySym] : "mySymbol"<br />
};
<br /><br />
accessing Symbol <br />
console.log(user[mySym])&nbsp; &nbsp;//"mySymbol<br /><br />
We can add new key value pairs to the object like so:<br />
user.address = "Rani Bagh";<br /><br />
We can also use functions as variables<br />
user.greeting = function()<br />
{<br />
    &nbsp; &nbsp;console.log(`Hello there ${this.name}`);<br />
}<br /><br />
We can make objects immutable by using Object.freeze().<br />
Object.freeze(user);<br />
or const user = Object.freeze({ 
    ...
});<br />

<b>Combine Objects</b><br />
Objects.assign({}, obj1, obj2) -> here {} is the target and obj1 and obj2 are the sources<br />
Copy the values of all of the enumerable own properties from one or more source objects to a target object. Returns the target object.<br />

Another way of appending objects is by using spread operator(...).
Similar to Arrays, this operator spreads all elements of the objects and returns a new object.<br />
const obj4 = {...obj1, ...obj2};<br />

Object.keys(obj1) -> returns an array of keys of the object.
Object.values(obj1) -> returns an array of values of the object.
Object.entries(obj1) -> returns an array of arrays where each child array has 2 elements, first key and second its value.<br />

<B>Destructuring of Object</B><br />
const {`<key>`} = `<object>`<br />
const {instructor} = course<br />
Now we can directly use the key without needing to write object.key.<br />
const {`<key>` : `<alias>`} = `<object>`<br />
we can also give an alias to the key<br />
<h1>Functions</h1>
function name(parameter1, parameter2)
{<br />
    ....<br />
    ....<br />

}

There is a problem with parameters in functions.
Suppose we create a function which accpets to numbers but since JS is dynamically typed, user may pass a string or anything else.<br />
So we need to check the datatypes before performing any task.<br />

Suppose we are not aware of the number of arguments the function will recieve. In that case we can use the rest operator(...).
It will pack all the values in an array.<br />

function calculateCartPrice(val1, val2, ...num1)<br />
{<br />
    return num1;<br />
}

console.log(calculateCartPrice(100, 200, 300, 400, 500, 600));<br />
val1 -> 100<br />
val2 -> 200<br />
num1 -> [300, 400, 500, 600]<br />

<b>Passing objects in a function</b><br />
function printUser(userObj)<br />
{<br />
    console.log(`name : ${userObj.username}, age : ${userObj.age}`);<br />
}<br />
This code will work fine if the object contains the keys we use in the fucntion. But we must type check to avoid errors.

<h3>Scopes</h3>
const and let have block scope but var has function scope.<br />
Suppose we declare a variable var c = 300 in our file. <br />
Now we import another file which has a if block with var c = 3 .<br />
This will create unexpected behaviour in the program.<br />
===============================================<br /><br />

`this` -> refers to the current context<br />

<h5>IIFE - Immediately Invoked Function Expressions</h5>
(function connect()<br />
{<br />
&nbsp;&nbsp;&nbsp;&nbsp;console.log("DB connected");<br />
})()
<br />
// () -> first paranthesis creates a block which has the fucntion definition
//() -> second parathesis is to execute the fucntion
<br /><br />
<b>Why Use IIFE?</b><br />
<u>Avoid Global Scope Pollution:</u><br />
Variables declared inside an IIFE are scoped to the function, preventing them from polluting the global namespace.<br />
<u>Encapsulation:</u><br />
It creates a private scope using closures, keeping variables and functions hidden from external code.<br />
<u>Immediate Execution:</u><br />
Useful when you need to initialize code immediately, like setting up event listeners or creating modules.<br /><br />

**Imp** -> IIFE does not know where to stop the context. So, we need to end the context by adding a semicolon(;) at the end.

We can arrow functions as IIFE too.