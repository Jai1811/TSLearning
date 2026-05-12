let num : any = 10;
num = "Hello";
num = true;
num = { name: "John", age: 30 };
num = [1, 2, 3];
num = null;
num = undefined;

let language : any[] = ["TypeScript", "JavaScript", "Python",1,3.14,true,{ name: "Java" },[1, 2, 3],null,undefined];

function logValue(value: any): void {
    console.log("Logged value:", value);
}

logValue(42);
logValue("Hello, World!");
logValue({ name: "Alice", age: 25 });
logValue([1, 2, 3, 4, 5]);
logValue(null);
logValue(undefined);

function returnAny(): any {
    return "This can be any type of value";
}

let result: any = returnAny();
console.log("Result from returnAny function:", result);

function information(a: number, b: any, c: any): void {
    console.log("Value of a:", a);
    console.log("Value of b:", b);
    console.log("Value of c:", c);
}

information(10, "Hello", { name: "Alice", age: 25 });   