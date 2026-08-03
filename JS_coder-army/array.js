let arr = [10, 20, 30, 40];

console.log(arr);
arr.push(50);      // Add to end
console.log(arr);
arr.pop();         // Remove from end
console.log(arr);
arr.unshift(15);    // Add to start 
console.log(arr);
arr.shift();       // Remove from start
console.log(arr);

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

let arr2=[1,2,3,4];
let arr3=arr2;
arr2.push(5);
console.log(arr2);
console.log(arr3);

const arrd=[10,20,30,50];
arr[2]=80;
console.log(arrd);

console.log(arrd.slice(1,3));

const arr4=[10,20,30,40];
const arr5=["monika",4,5];
const arrr=[9,8,7,6];
// arr4.push(arr5);
// console.log(arr4);

const arr6=arr4.concat(arr5);
console.log(arr6);

const arr7=[arr4,arr5,arrr];
console.log(arr7);


//spread opertor
const arr8=[...arr4,...arr5,...arr];
console.log(arr8);

const names=["monika","yash","Radha"];
console.log(names.toString()); //return all data in string
console.log(names.indexOf("monika"));
console.log(names.includes("monika"));
console.log(names.sort());
console.log(names.reverse());

const oneD=[4,5,6,7,8,1,2,3,4];
console.log(oneD.toString());
console.log(oneD.sort());


//flat() flattens (opens) nested arrays.
const arrflat=[10,20,30,[40,50,60,70,[65,43,22]],22];
const flat=arrflat.flat(2);
console.log(flat);

const a=[10,309,"Rohit",9.4];
a.name="Mohit";
console.log(a);