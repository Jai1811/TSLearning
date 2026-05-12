//switch case statement
 let day: number = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let month: number = 5;
switch (month) {
    case 1:
    case 2:
    case 3:     
        console.log("Spring");
        break;
    case 4:
    case 5:
    case 6:
        console.log("Summer");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Autumn");
        break;
    case 10:
    case 11:
    case 12:
        console.log("Winter");
        break;
    default:
        console.log("Invalid month");
}