const promiseOne = new Promise(function(resolve, reject)
{
    //Do an async task
    //Ex - DB calls, cryptography, network call

    setTimeout(() => {
        console.log("async task is complete")
    } , 1000)
});

//consuming promise
promiseOne.then(function()
{
    console.log("promise consumed");
})