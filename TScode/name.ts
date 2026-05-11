console.log("Hello, World!");
//.ts file with a simple console log statement.
//.ts --> tsc(Ts compliler) --> .js file --> JavaScript engine executes the .js file. javascript runtime environment (like node.js or browser) executes the .js file.

// function getInfo(){
//     if(firstName.length > 10){
//         console.log("First name is too long.");
//     }
//     else{
//         console.log("First name is acceptable.");
//     }
// }
// getInfo();

// const user = {
//     name: "John Doe",
//     age: 30,
//     isAdmin: true
// }

// console.log(user.city); // Output: John Doe

let age: number = 30;
let fistName: string = "John";
let isAdmin: boolean = true;
let hobbies: string[] = ["Reading", "Traveling", "Cooking"];
let userTs: { name: string; age: number; isAdmin: boolean } = {
    name: "John Doe",
    age: 30,
    isAdmin: true
};
let setOfnumbers: Set<number> = new Set([1, 2, 3, 4, 5]);

let list: Array<string> = ["Apple", "Banana", "Cherry"];

let map: Map<string, number> = new Map();
map.set("one", 1);
map.set("two", 2);
map.set("three", 3);    

let tuple: [string, number] = ["John Doe", 30];

console.log(userTs.name); // Output: John Doe

let listOfObjects: Array<Object> = ["12",12,true, {name: "John"}, [1, 2, 3]];