const user = {
    name: "Monika",
    age: 22
};

const jsonData = JSON.stringify(user);

console.log(jsonData);
console.log(typeof jsonData);


//json to JObject
const jsonData1 = '{"name":"Monika","age":22}';
const user1 = JSON.parse(jsonData1);

console.log(user1);
console.log(typeof user1);