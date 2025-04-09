//ES6

class User{
    constructor(username, email, password)
    {
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPass()
    {
        return `${this.password}@123`;
    }

    usernameToUpper(){
        return this.username.toUpperCase();
    }
}

const user1 = new User("varun", "varun@gmail.com", "1234");

// console.log(user1.encryptPass());
// console.log(user1.usernameToUpper());


//=====Behind the scenes==========

// function User(username, email, password)
// {
//     this.username = username;
//     this.email = email;
//     this.password = password;
// }

// User.prototype.encryptPass = function()
// {
//     return `${this.password}@123`;
// }

// User.prototype.usernameToUpper = function()
// {
//     return this.username.toUpperCase();
// }


//Inheritance 

class Teacher extends User
{
    constructor(username, email, password, teacherId, subject)
    {
        super(username, email, password);
        this.teacherId = teacherId;
        this.subject = subject;
    }

    addCourse()
    {
        console.log(`New course was added by ${this.username}(${this.teacherId}) for ${this.subject}`);
    
    }
}

const teacher1 = new Teacher("Varun", "varun@gmail.com", "1234", "cs11", "Computer Science");
teacher1.addCourse();
console.log(teacher1.encryptPass());
console.log(teacher1 instanceof User);