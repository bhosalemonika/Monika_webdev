let name="Monika";
let complete=`monika
bhosale`;
console.log(complete);

day=10;
console.log(`strike com on day ${day}`);

let str="hello from coder army coder";
console.log(str.length);
console.log(str[0]);

//string is immutable
str[2]="m";
console.log(str);

console.log(str.toUpperCase());
console.log(str.toLocaleLowerCase());

console.log(str.indexOf('cod'));
console.log(str.lastIndexOf('cod'));
console .log(str.includes('cod'));

console.log(str.slice(1,5));
console.log(str.slice(3));

console.log(str.replaceAll('ode','ide'));

const data="    Monika ";
console.log(data.trim());


const names="Rohit, Mohit, Raghav, Tushar, madhav";
console.log(names.split(","));

const now=new Date();
console.log(now);
//To show indian time
console.log(now.toString());
console.log(now.toISOString());
console.log(now.toLocaleString());
//day start from 1
console.log(now.getDay());
console.log(now.getDate());
//month start form 0 hence o/p come 6 
console.log(now.getMonth());
console.log(now.getFullYear());

const tday=new Date(2025,8,1,11,18,18);
console.log(tday);

const tdate=Date.now();
console.log(tdate);
const dates=new Date(now);
console.log(dates.toString());
