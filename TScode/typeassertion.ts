//TSC
//basically this is type casting in typescript 


//1. using <> angle brackets
let totalbill: any = 123

let finalbill = <number>totalbill+200;

console.log(finalbill);


let something: any = "Hello World";

let strlength = (something as string).length;
console.log(strlength);

let flag : any = true;
let flagIsBoolean = <Boolean>flag;
console.log(flagIsBoolean);
let flagIsBoolean2 = flag as Boolean;
console.log(flagIsBoolean2);