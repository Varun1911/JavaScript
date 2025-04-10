function User(email, password)
{
    let _email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get : function()
        {
            return _email.toUpperCase();
        },
        set : function(value)
        {
            _email = value + "@123";
        },
    });

    this.email = email;
}

  

const user = new User("varun@gmail.com", "2134");
console.log(user.email);


// const obj = {
//     _email : 'varun@gmail.com',
//     _password : '123abc',

//     get email()
//     {
//         return this._email.toUpperCase();
//     },

//     set email(value)
//     {
//         this._email = value + `123`;
//     }
// }

// console.log(obj.email);