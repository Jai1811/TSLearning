//is tuple mutable in typescript?Yes, tuples in TypeScript are mutable. You can change the values of the elements in a tuple after it has been created. However, you cannot change the length of the tuple or the types of its elements once it has been defined.
 
//when to use tuple in typescript?You should use tuples in TypeScript when you want to represent a fixed number of elements with specific types. Tuples are useful when you want to group related values together, such as a person's name and age, or a coordinate with x and y values. They provide a way to enforce the structure of the data while still allowing for different types of values within the same group.


let person: [string, number, boolean] = ["John Doe", 30, true];

console.log(person[0]); // Output: John Doe
console.log(person[1]); // Output: 30
console.log(person[2]); // Output: true

let data : [string, number, boolean[] ] = ["Hello", 42, [true, false, true]];
console.log(data[0]); // Output: Hello
console.log(data[1]); // Output: 42
console.log(data[2]); // Output: [true, false, true]    


let persons : [string, number][] = [["John Doe", 30], ["Jane Doe", 25], ["Bob Smith", 40]];

console.log(persons[0]); // Output: [John Doe, 30]
console.log(persons[0][1]); // Output: 30
console.log(persons[1][0]); // Output: Jane Doe
console.log(persons[1][1]); // Output: 25
console.log(persons[2][0]); // Output: Bob Smith
console.log(persons[2][1]); // Output: 40


persons.push(["Alice Johnson", 35]); // Adding a new person to the array of tuples

console.log(persons[3]); // Output: [Alice Johnson, 35]

