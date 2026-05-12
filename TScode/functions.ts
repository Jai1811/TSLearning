function foo(number:number, string:string): void {
    console.log(`Number: ${number}, String: ${string}`);
}

foo(42, "Hello, TypeScript!");

function add(a: number, b: number): number {
    return (a + b);
}

add(5, 10);

const anymousFunction = function() {
    console.log("This is an anonymous function.");
};
anymousFunction();

const arrowFunction = () => {
    console.log("This is an arrow function.");
};
arrowFunction();

const multiply = (a: number, b: number): number => {
    return a * b;
};
multiply(3, 4);

let arr: number[] = [1, 2, 3, 4, 5];

arr.forEach((num) => {
    console.log(num);
});

class PersonClass {
firstName: string;
lastName: string;
    constructor(firstName: string, lastName:string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

let person1 = new PersonClass("John", "Doe"); 

console.log(`Person: ${person1.firstName}, ${person1.lastName}`);
interface Person {
    name: string;
    age: number;
}

function greet(person: Person): void {
    console.log(`Hello, ${person.name}! You are ${person.age} years old.`);
}

const person: Person = { name: "Alice", age: 30 };
greet(person);

