function getInfo(){
    if(firstName.length > 10){
        console.log("First name is too long.");
    }
    else{
        console.log("First name is acceptable.");
    }
}
getInfo();

const user = {
    name: "John Doe",
    age: 30,
    isAdmin: true
}

console.log(user.city); // Output: John Doe