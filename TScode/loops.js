"use strict";
//loops while, do while, for, for in, for of
//while loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}
//do while loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);
//for loop
for (let k = 0; k < 5; k++) {
    console.log(k);
}
//for in loop
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key); // logs 'a', 'b', 'c'
    console.log(obj[key]); // logs 1, 2, 3
}
//for of loop
const arr = [10, 20, 30];
for (const value of arr) {
    console.log(value); // logs 10, 20, 30
}
