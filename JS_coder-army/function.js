function greeting(){
    console.log("Hello form core2web");
}

function addnum(num1,num2){
    const sum=num1+num2;
    console.log(sum);
}
greeting();
addnum(10,20);
console.log(greeting());

addnum(12,2,3);


//rest operator
function addNums(...num){
    let sum=0;
    for(let n of num){
        sum+=n;
    }
    console.log(sum);
}
addNums(1,2,3,4,5);


greet();
function greet(){
    console.log("Hello");
}


//error refrencerror
// greet();
// const greet=function(){
//     console.log("Hello");
// }

let arr=[10,11,19,7,60];
arr.sort((a,b)=>a-b);
console.log(arr);

const addNum=(n1,n2)=>n1+n2;
console.log(addNum(5,4));

//if we have single parameter not need of ()
const sqrt=num=>num*num;
console.log(sqrt(4));

const greetings=()=>{
    return{
        name:"Rohit",
        age:30
    }
}
console.log(greetings());

const greetings1=()=>({name:"Monika",age:32});
console.log(greetings1());

(function greeting(){
    console.log("Hello JI");
})();

(()=>{
    console.log("HIIII");
})();


function greets(){
    console.log("Hello kaise ho");
}

function meets(callback){
    console.log("i am going to meet someoneo");
    callback();
}
meets(greets);


function blickit() {
    console.log("We have started preparing your food");
}
function zomatoOrderPlaced() {
    console.log("We have started preparing your food");
}

function payment(amount,callback) {
    console.log(`${amount} payment has initialized`);
    console.log("Payment is received");
    callback();

}

//payment(500,zomatoOrderPlaced);
payment(200,blickit);