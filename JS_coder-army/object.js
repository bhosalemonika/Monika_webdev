const user={
    name:"Rohit",
    age:20,
    "home address": "Pune",
    greeting:function(){
        console.log ("hello from c2w");
        console.log(`Hello ${user.name}`);
        console.log(`My age is ${this.age}`);
    }
}
console.log(user.name);
console.log(user["home address"]);

console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

for(let keys in user){
    console.log(keys,user[keys]);
}

const arr=[10,20,30,40,50];

const [first,second]=arr;
console.log(first,second);

const {name:UserName,age:Userage}=user;
console.log(UserName);

for(let [keys,values] of Object.entries(user)){
    console.log(values);
}

for(let keys of Object.entries(user)){
    console.log(keys);
}
user.greeting();


const user1={
    name:"Monika",
    age:22,
    address:{
        city:"Pune",
        state:"MH"
    }
}
const user2={...user1};
// user2.address.city="Mumbai";
console.log(user2);
console.log(user1);


const user3 = structuredClone(user1);

user3.address.city = "Mumbai";

console.log(user1);
console.log(user3);
