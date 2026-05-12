let x:number = 10;
if(x > 5){
    console.log("x is greater than 5");
}else{
    console.log("x is less than or equal to 5");
}

if(x > 0){
    console.log("x is positive");
}else if(x < 0){
    console.log("x is negative");
}else{
    console.log("x is zero");
}

//ternary operator
let result = (x > 5) ? "x is greater than 5" : "x is less than or equal to 5";
console.log(result);

result = (x > 0) ? "x is positive" : (x < 0) ? "x is negative" : "x is zero";
console.log(result);