const person = {
    name: "Monika",
    age: 22
};

console.log(person.toString());
console.log(person.hasOwnProperty("name"));
console.log(person.valueOf());


const arr = [1,2,3];

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);


function greet(){
    console.log("Hello");
}
greet.call();    