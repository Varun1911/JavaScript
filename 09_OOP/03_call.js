function SetUsername(username)
{
    this.username = username;
    console.log("called");
}

function createUser(username, email, pass)
{
    // SetUsername(username);
    //This method is called but then it's execution context is removed and all the variables declared in it are also removed. But the execution context of the current function is still there. So we need to explicitly call this function using the `call` method. This will hold the reference of the function. We also need to pass the current context.


    SetUsername.call(this, username)
    this.email = email;
    this.pass = pass;
}

const user1 = new createUser("Varun", 'varun@gmail.com', "1234");

console.log(user1);     
//createUser { email: 'varun@gmail.com', pass: '1234' }
