let email = "V@makear.ai"

if(email)
{
    //executed
    // console.log("Got user email");
}
else
{
    // console.log("Don't have user email");
}


email = "";     //or email = null;

if(email)
{
    // console.log("Got user email");
}
else
{
    //executed
    // console.log("Don't have user email");
}


//empty array is truthy
//how to check array then 

let arr = [];

if(arr.length === 0)
{
    //array is empty
}

//similarly for object 
let obj = {}

if(Object.keys(obj).length === 0)
{
    //object is empty 
}


if(false == 0)
{
    //true
}

if(false == "")
{
    //true
}

if(0 == "")
{
    //true
}



// ============================================
// Nullish Coalescing Operator (??)

let val1;
val1 = null ?? 10;
console.log(val1);  //10

val1 = undefined ?? 10;
console.log(val1);  //10