class User{
    constructor(email, password)
    {
        this.email = email;
        this.password = password;
    }

    get password()
    {
        return this._password.substring(0,1) + "***";
    }

    set password(password)
    {
        this._password = password;
    }
}

const varun = new User("varun@gmail.com", "abc");
console.log(varun.password);


//getter and setter both need to be defined together, one cannot be defined alone
