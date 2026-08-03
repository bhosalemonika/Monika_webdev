const arr=[1,2,3,45,6,7];
console.log(arr);
const set1=new Set(arr);
set1.add(90);
console.log(set1);
set1.delete(1);
console.log(set1);
set1.clear();
console.log(set1);

const email=["r@gmail.com","m@gmail.com","a@gmail.com","a@gmail.com"];
const s1=new Set(email);
console.log(email);

//remove duplicates by makeing set and using spread operator convert back to array
const uniqueEmail=[...new Set(email)];
console.log(uniqueEmail);

const m1=new Map([
    ["Rohit",40],
    [2,"Monika"],
    [true,11]
])
console.log(m1);
m1.set({name:"Manish"},false);
m1.set("mnaya",30)
console.log(m1);
console.log(m1.size);
console.log(m1.has("Rohit"));
