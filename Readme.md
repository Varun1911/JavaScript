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
