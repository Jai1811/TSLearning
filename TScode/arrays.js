"use strict";
let arraysOfNumbers = [1, 2, 3, 4, 5];
let arraysOfStrings = ["Hello", "World", "TypeScript"];
let arraysOfBooleans = [true, false, true, false];
console.log(arraysOfNumbers);
console.log(arraysOfStrings);
console.log(arraysOfBooleans);
let arraysOfMixed = [1, "Hello", true, 2, "World", false];
console.log(arraysOfMixed);
let arraysOfAny = [1, "Hello", true, { name: "TypeScript" }, [1, 2, 3]];
console.log(arraysOfAny);
//using generic array type
let genericArrayOfNumbers = [1, 2, 3, 4, 5];
let genericArrayOfStrings = ["Hello", "World", "TypeScript"];
let genericArrayOfBooleans = [true, false, true, false];
console.log(genericArrayOfNumbers);
console.log(genericArrayOfStrings);
console.log(genericArrayOfBooleans);
let genericArrayOfMixed = [1, "Hello", true, 2, "World", false];
console.log(genericArrayOfMixed);
let genericArrayOfAny = [1, "Hello", true, { name: "TypeScript" }, [1, 2, 3]];
console.log(genericArrayOfAny);
for (let element of genericArrayOfAny) {
    console.log(element);
}
let arr;
arr = ["Hello", "World", "TypeScript"];
console.log(arr);
for (let stringElement of arr) {
    console.log(stringElement);
}
//never use for in loop to iterate over array as it iterates over the index and not the element
for (let index in arr) {
    console.log(arr[index]);
}
arr.forEach(element => {
    console.log(element);
});
