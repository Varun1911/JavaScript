const nums = [1, 2, 3, 4];

let initialSum = 0;

let total = nums.reduce(function(accumulator, currentValue)
{
    console.log(accumulator, currentValue);
    return accumulator + currentValue;
}, initialSum);

console.log(total);


total = nums.reduce((acc, currVal) => acc + currVal, 3);
console.log(total);
