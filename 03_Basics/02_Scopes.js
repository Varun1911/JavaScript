// let a = 10;
// const b =20;
// var c = 30;

// {} -> scope

// var c = 300;

if(true)
{
    let a = 10;
    const b =20;
    // var c = 30;
}


// console.log(a);     //Reference Error: a is not defined
// console.log(b);     //Reference Error: b is not defined
// console.log(c);     //30


let d = 500;

if(true)
{
    let d = 20;
    // console.log(d);     //20
}

// console.log(d);     //500


function one()
{
    const username = "Varun";

    function two()
    {
        const website = "Youtube";

        console.log(username);
    }

    // console.log(website);    //Reference Error
    
    two();
}

one();

console.log(addOne(5));     //addOne can be called before fucntion definition as fucntions are hoisted on top

// console.log(addTwo(6));  //not possible as expression in not hoisted      

function addOne(num)
{
    return num + 1;
}

const addTwo = function(num)
{
    return num + 2;
}

console.log(addTwo(6));
//addTwo would sometimes be referred as expression.