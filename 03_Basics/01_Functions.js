// function AddTwoNumbers(num1, num2)
// {
//     console.log(num1 + num2);
// }

function AddTwoNumbers(num1, num2)
{
    return num1 + num2;
}

// AddTwoNumbers(3, "4");


const result = AddTwoNumbers(4,5);  
// console.log(`result : ${result}`);


function greet(username = "user") //default paramter
{
    return `Hello ${username}`;
}


// console.log(greet("Varun"));    //Hello Varun
// console.log(greet());           //Hello user


//suppose we don't know how many arguments the user will pass
//we can use the rest operator(...).
//It packs all values into an array 
function calculateCartPrice(val1, val2, ...num1)
{
    return num1;
}

// console.log(calculateCartPrice(200, 400, 300))

const user = {
    username : "Varun",
    age : 25
};

function printUser(userObj)
{
    console.log(`name : ${userObj.username}, age : ${userObj.age}`);
    
}

printUser(user);
printUser({
    username : "Harshi",
    age : 24
});

//Similarly we can pass arrays too.