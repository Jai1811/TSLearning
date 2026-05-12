"use strict";
let userId = 12345;
userId = "abcde"; // This is valid because userId can be either a number or a string
function printUserId(id) {
    if (typeof id === "number") {
        console.log(`User ID is a number: ${id}`);
    }
    else {
        console.log(`User ID is a string: ${id}`);
    }
}
printUserId(userId); // This will work regardless of whether userId is a number or a string
