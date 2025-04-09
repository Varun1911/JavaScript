class User{
    constructor(username)
    {
        this.username = username;
    }

    logMe()
    {
        console.log(`Username : ${this.username}`);
    }

    //we dont want instances to access this object
    static createID()
    {
        return `123@${Math.random().toFixed(2)}`;
    }
}

const user1 = new User("Varun");