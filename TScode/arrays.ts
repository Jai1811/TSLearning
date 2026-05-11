let arraysOfNumbers : number [] = [1, 2, 3, 4, 5];
let arraysOfStrings : string [] = ["Hello", "World", "TypeScript"];
let arraysOfBooleans : boolean [] = [true, false, true, false];

console.log(arraysOfNumbers);
console.log(arraysOfStrings);
console.log(arraysOfBooleans);  


let arraysOfMixed : (number | string | boolean) [] = [1, "Hello", true, 2, "World", false];
console.log(arraysOfMixed);

let arraysOfAny : any [] = [1, "Hello", true, { name: "TypeScript" }, [1, 2, 3]];
console.log(arraysOfAny);



//using generic array type
let genericArrayOfNumbers : Array<number> = [1, 2, 3, 4, 5];
let genericArrayOfStrings : Array<string> = ["Hello", "World", "TypeScript"];
let genericArrayOfBooleans : Array<boolean> = [true, false, true, false];

console.log(genericArrayOfNumbers);
console.log(genericArrayOfStrings);
console.log(genericArrayOfBooleans);

let genericArrayOfMixed : Array<number | string | boolean> = [1, "Hello", true, 2, "World", false];
console.log(genericArrayOfMixed);

let genericArrayOfAny : Array<any> = [1, "Hello", true, { name: "TypeScript" }, [1, 2, 3]];
console.log(genericArrayOfAny); 

for(let element of genericArrayOfAny)
{
    console.log(element);
}




let arr : string [];
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

