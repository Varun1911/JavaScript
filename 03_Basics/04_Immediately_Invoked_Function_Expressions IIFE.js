
//Named IIFE
(function connect()
{
    console.log("DB connected");
})();

// () -> first paranthesis creates a block which has the fucntion definition
//() -> second parathesis is to execute the fucntion


(() =>
{
    console.log("DB disconnected");
})();


((args) =>
{
    console.log(args);
})("Varun");