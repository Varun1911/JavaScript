const promiseOne = new Promise(function(resolve, reject)
{
    //Do an async task
    //Ex - DB calls, cryptography, network call

    setTimeout(() => {
        // console.log("async task is complete");
        resolve();
    } , 1000)
});

//consuming promise
promiseOne.then(function()
{
    // console.log("promise consumed");
});


new Promise(function(resolve, reject){

    setTimeout(() => {
        // console.log("Async task 2");
        resolve();
    },(1000));
}).then(function()
{
    // console.log("async 2 resolved");
});


const promiseThree = new Promise(function(resolve, reject)
{
    setTimeout(() => {
        resolve
        (
            {
                name : "Varun",
                email : "varun@gmail.com"
            }
        );
    }, 1000);
});


promiseThree.then(function(data)
{
    // console.log(data);
})


// const promiseFour = new Promise(function(resolve, reject)
// {
//     setTimeout(() => {
//         let error = false;
//         if(!error)
//         {
//             resolve([1,2,4,66]);
//         }
//         else
//         {
//             reject("Something went wrong");
//         }
//     }, 1000);
// });

// promiseFour
//     .then((data) =>
//     {
//         console.log(data);
//         return data[1];
//     }).then((data) =>
//     {
//         console.log(data);
//     }).catch((error) =>
//     {
//         console.log(error);
//     }).finally(() => 
//     {
//         console.log("task complete");
//     });


// const promiseFive = new Promise((resolve, reject) =>
// {
//     setTimeout(() => {
//         let error = true;
//         if(!error)
//         {
//             resolve(
//                 {
//                     username : "JavaScript",
//                     password : "123"
//                 }
//             );
//         }
//         else
//         {
//             reject("JS went wrong");
//         }
//     }, 1000);
// });


// async function consumePromiseFive(){
//     try
//     {
//         const response = await promiseFive;
//         console.log(response);
//     }
//     catch(e)
//     {
//         console.log(e);
//     }
// }

// consumePromiseFive();

async function getAllUsers()
{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    }
    catch(e){
        console.log("E : " + e);
    }
}

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>
{
    return response.json();
}).then((json) =>
{
    console.log(json);
}).catch((error) =>
{
    console.log(error);
})
