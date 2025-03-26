const coding = ["JS", "C++", "Java", "c#"];

// coding.forEach( function (val)
// {
//     // console.log(val);
// });

// coding.forEach((element) => console.log(element));

// function PrintMe(item)
// {
//     console.log(item);
// }

// coding.forEach(PrintMe);

coding.forEach((item, index) =>
{
    console.log(item, index);
})

coding.forEach((item, index, arr) =>
{
    console.log(item, index, arr);
})
