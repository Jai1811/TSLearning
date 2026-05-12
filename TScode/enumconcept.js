"use strict";
//Enums store a collection of related values that can be numeric or string values. Enums are a feature added in TypeScript to help organize and manage sets of related constants.
//Numeric Enums
var Browser;
(function (Browser) {
    Browser[Browser["Chrome"] = 0] = "Chrome";
    Browser[Browser["Firefox"] = 1] = "Firefox";
    Browser[Browser["Safari"] = 2] = "Safari";
    Browser[Browser["Edge"] = 3] = "Edge"; // 3       
})(Browser || (Browser = {}));
console.log(Browser); // Output: { '0': 'Chrome', '1': 'Firefox', '2': 'Safari', '3': 'Edge', Chrome: 0, Firefox: 1, Safari: 2, Edge: 3 }
console.log(Browser.Chrome); // Output: 0
console.log(Browser.Firefox); // Output: 1
//String Enums
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Red); // Output: "RED"
console.log(Color.Green); // Output: "GREEN"
//hetrogeneous enums can be useful when you want to represent a set of related values that may not be of the same type. However, it's generally recommended to use homogeneous enums (either all numeric or all string) for better readability and maintainability.   
//Heterogeneous Enums
var Mixed;
(function (Mixed) {
    Mixed[Mixed["Yes"] = 1] = "Yes";
    Mixed["No"] = "NO";
})(Mixed || (Mixed = {}));
console.log(Mixed.Yes); // Output: 1
console.log(Mixed.No); // Output: "NO"
function getBrowserName(browser) {
    switch (browser) {
        case Browser.Chrome:
            return "Google Chrome";
        case Browser.Firefox:
            return "Mozilla Firefox";
        case Browser.Safari:
            return "Apple Safari";
        case Browser.Edge:
            return "Microsoft Edge";
        default:
            return "Unknown Browser";
    }
}
console.log(getBrowserName(Browser.Chrome)); // Output: "Google Chrome"
//Enums can also have computed and constant members, and they can be used in various ways to improve code readability and maintainability.  
