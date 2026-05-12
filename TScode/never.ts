let nothing: never; // This variable can never have a value, it represents the type of values that never occur.

// Example of a function that never returns (it throws an error)
function throwError(message: string): never {
    throw new Error(message);
}

// Example of a function that has an infinite loop
function infiniteLoop(): never {
    while (true) {
        // do something indefinitely
    }
}   
