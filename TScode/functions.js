"use strict";
function foo(number, string) {
    console.log(`Number: ${number}, String: ${string}`);
}
foo(42, "Hello, TypeScript!");
function add(a, b) {
    return (a + b);
}
add(5, 10);
const anymousFunction = function () {
    console.log("This is an anonymous function.");
};
anymousFunction();
const arrowFunction = () => {
    console.log("This is an arrow function.");
};
arrowFunction();
const multiply = (a, b) => {
    return a * b;
};
multiply(3, 4);
let arr = [1, 2, 3, 4, 5];
arr.forEach((num) => {
    console.log(num);
});
class PersonClass {
    firstName;
    lastName;
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
let person1 = new PersonClass("John", "Doe");
console.log(`Person: ${person1.firstName}, ${person1.lastName}`);
function greet(person) {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}
const person = { name: "Alice", age: 30 };
greet(person);
