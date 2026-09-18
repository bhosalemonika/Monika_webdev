console.log("Hello");
let sum=0;
for(let i=0;i<200000000;i++){
    sum+=i;
}

setTimeout(()=>{
    console.log("Time out Executed");
},5000);


setTimeout(()=>{
    console.log("Time out Executed after 6 second ");
},6000);



console.log(sum);
console.log("Last")
