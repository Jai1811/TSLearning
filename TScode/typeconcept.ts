//typescript is a superset of javascript that adds static types and other features to the language. It is developed and maintained by Microsoft. TypeScript code is transpiled to JavaScript code, which can then be executed in any JavaScript environment, such as a web browser or Node.js. TypeScript provides features like type annotations, interfaces, classes, and modules, which help developers write more robust and maintainable code. It also includes support for modern JavaScript features and can be configured to target specific versions of JavaScript for compatibility.

//type inference is a feature in TypeScript that allows the compiler to automatically determine the type of a variable based on its value. When you declare a variable and assign it a value, TypeScript can infer the type of that variable without you having to explicitly specify it. For example, if you declare a variable and assign it a string value, TypeScript will infer that the variable is of type string. This helps to reduce the amount of code you need to write while still providing type safety and improved code readability.

//type annotations are a way to explicitly specify the type of a variable, function parameter, or return value in TypeScript. By using type annotations, you can provide additional information to the TypeScript compiler about the expected types of values, which helps catch errors during development and improves code readability. For example, you can annotate a variable with a specific type like this: let age: number = 30; This tells the compiler that the variable age should only hold values of type number. Type annotations can also be used for function parameters and return types to ensure that the correct types are being used throughout your code.

let firstName: string;//type annotation for a variable

firstName = "John Doe";//type inference for a variable

let ageN: number;
ageN = 30;

let isAdminN: boolean = true;//type annotation with initialization

//null and undefined are special types in TypeScript that represent the absence of a value. null is used to indicate that a variable intentionally has no value, while undefined indicates that a variable has been declared but has not been assigned a value. In TypeScript, you can use the strictNullChecks compiler option to enforce stricter type checking for null and undefined values, which helps prevent common errors related to null or undefined values in your code.

let nullableValue:null =  null;
let undefinedValue:undefined = undefined;
let nullableOrUndefinedValue: string | null | undefined = null; //union type that can be either a string, null, or undefined

let anyValue: any = "This can be any type of value"; //the any type allows a variable to hold any type of value, effectively opting out of type checking for that variable. It can be useful in certain situations where you need to work with dynamic data or when migrating existing JavaScript code to TypeScript, but it should be used with caution as it can lead to potential runtime errors if not used properly.

anyValue = 42; //reassigning anyValue to a number
anyValue = true; //reassigning anyValue to a boolean

//the unknown type is a safer alternative to the any type in TypeScript. It represents a value that could be of any type, but unlike any, it does not allow you to perform operations on it without first performing a type check or type assertion. This means that you cannot directly access properties or call methods on a variable of type unknown without first ensuring that it is of the expected type. The unknown type is useful when you want to work with values that may come from external sources or when you want to enforce stricter type safety in your code.

let unknownValue: unknown = "This can be any type of value"; //the unknown type allows a variable to hold any type of value, but requires type checking before use

if (typeof unknownValue === "string") {
    console.log(unknownValue.toUpperCase()); // Now we can safely call string methods on unknownValue
} else {
    console.log("unknownValue is not a string."); // Handle the case where unknownValue is not a string
}

//the never type represents a value that never occurs. It is used to indicate that a function will never return a value or that a variable will never hold a value. For example, a function that always throws an error or an infinite loop would have a return type of never. The never type is useful for ensuring that certain code paths are not reachable and can help catch errors during development.

function throwError(message: string): never {
    throw new Error(message); // This function will never return a value
}

function infiniteLoop(): never {
    while (true) {
        // This function will run indefinitely and never return
    }
}

//the void type represents the absence of a value. It is commonly used as the return type for functions that do not return a value. For example, a function that performs an action but does not return anything would have a return type of void. The void type is useful for indicating that a function is intended to be used for its side effects rather than for producing a value.

function logMessage(message: string): void {
    console.log(message); // This function does not return a value
}

function getSQ(number: number): number {

    return number * number; // This function returns the square of the input number

}

function getAddition(a,b){
    return a + b;
}

getAddition(5, 10); // This will return 15, but without type annotations, it can lead to potential issues if non-numeric values are passed in.