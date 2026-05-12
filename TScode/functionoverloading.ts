//function overloading in typescripts depends on the number of parameters and their types
//number of parameters should be same
//types of the parameters should be different
function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: any, b: any): any {
    return a + b;
}

console.log(add(1, 2)); // Output: 3
console.log(add("Hello, ", "world!")); // Output: "Hello, world!"
// add(1,"");//Error
