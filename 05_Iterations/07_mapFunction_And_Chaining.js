const nums = [1, 2, 3, 4, 5];

let newNums = nums.map((item) => item + 10);
console.log(newNums);

newNums = nums
            .map((item) => item + 3)
            .map((item) => item * 2)
            .filter((item) => item < 14);

console.log(newNums);