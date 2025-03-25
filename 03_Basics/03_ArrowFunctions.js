const user = 
{
    username : "Varun",
    age : 25,
    welcomeMessage : function()
    {
        console.log(`Hello ${this.username}, welcome to the website`);

        console.log(this);
        //this refers to the current context
    }
}

// user.welcomeMessage();
// user.username = "Harshi";
// user.welcomeMessage();

// console.log(this);       

//current context is empty {}.This happens when we are in node environment. Whem we do this in browser, this refers to window object which is browser's global object. But in node the global object is empty.


// function hello()
// {
//     let username = "Varun";
//     console.log(this);
//     // console.log(this.username);     
//     //undefined, we are not able to use this in functions
// }

// hello();


// const hello = function()
// {
//     let username = "Varun";
//     // console.log(this.username);     
//     //undefined
// }


// const UserFunc = () => {
//     let username = "Varun";
//     console.log(this);  //{} -> empty object
//     // console.log(this.username);     
//     //undefined
// } 


const addTwoNums = (num1, num2) => {
    return num1 + num2;
}


const addTwoNums_2 = (num1, num2) => (num1 + num2);   
//implicit return


const returnObject = () => ({username : "Varun"});
//returning object

console.log(returnObject());

