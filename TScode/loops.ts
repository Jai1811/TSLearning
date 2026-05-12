//loops while, do while, for, for in, for of

//while loop
let i: number = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//do while loop
let j: number = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

//for loop
for (let k: number = 0; k < 5; k++) {
    console.log(k);
}

//for in loop
const obj: { [key: string]: number } = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(key); // logs 'a', 'b', 'c'
    console.log(obj[key]); // logs 1, 2, 3
}

//for of loop
const arr: number[] = [10, 20, 30];
for (const value of arr) {
    console.log(value); // logs 10, 20, 30
} 