const arr = [1, 2, 3, 4, 5];

for (const element of arr) {
    // console.log(element);
}

const str = "Varun";

for (const char of str) {
    // console.log(char);
}


//Maps

const map = new Map();
map.set(1, "a");
map.set(2, "b");
map.set(3, "c");
map.set(4, "d");
map.set(4, "e");

for (const keyValPair of map) {
    // console.log(keyValPair);   
}


for (const [key, value] of map) {
    console.log(value);   
}