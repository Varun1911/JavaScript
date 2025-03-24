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
