
// Primitive Data Types

// 1 Number
let age = 22;
age=45;
// 2. String
let name = "Monika";
console.log("\nString:", name, "    Age:",age);
name="radha";
console.log(name);

// 3. Boolean
let login = true;
console.log("\nBoolean:", login);

// 4. Undefined
let user;
console.log("\nUndefined:", user);

// 5. Null
let wheather = null;
console.log("\nNull:", wheather);

// 6. BigInt
let num = 1234567890123456789012345678901234567890n;
console.log("\nBigInt:", num);

// 7. Symbol
let id1 = Symbol("id");
console.log("\nSymbol:", id1);
let id2=Symbol("id");
console.log("\nSymbol:",id2);
console.log(id1==id2);

// Non-Primitive Data Types

// 1. Array
let arr = [10,20,11,"rohit",true];
arr.push("maya");
console.log("\nArray:", arr);

// 2. Object
let obj = {
    name: "Monika",
    account:122344,
    age: 22,
    gen: "female"
};

console.log("\nObject:", obj);
console.log("Student Name:", obj.name);
console.log("Student Age:", obj.age);
console.log("Type:", typeof obj);



// 3. Function
function greet() {
    return "Welcome to JavaScript";
}

console.log( greet());


//Primitive datatpe copy value 
let a = 10;
let b = 10;
b=a;
a=60;
console.log(a);
console.log(b);

console.log(a == b);


//non primptive copy refrence

let objc = {
    name: "monika",
    age: 20
}
console.log(objc);
let obj2 = objc;
obj2.name = "Radha";
console.log(objc);
console.log(obj2);

