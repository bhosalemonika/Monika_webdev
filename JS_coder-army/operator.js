let x=10;
let y=20;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y);
console.log(x<=y);
console.log(x>=y);
console.log(x<=y);



a="10";
b=10;
console.log(a==b);
console.log(a===b);

console.log(Number(b));
console.log(String(a));
console.log(Number(null));
console.log(Number(undefined));
console.log(Boolean("Hello"));
console.log(Boolean(""));


let p=0.1;
let q=0.2;
r=p+q;
console.log(r);


console.log(null==undefined);
console.log(null===undefined);
console.log(null==0);
console.log(null==false);
console.log(null=="");

console.log(null>=0);
console.log(null>undefined);
console.log(null>=undefined);
console.log(null<=undefined);

//string comaparison
console.log("monika">"rohan");

console.log(NaN==NaN);


console.log(true && true);
console.log(true && false);
console.log(false && true);

console.log("monika" && "Rohit");
console.log("" && "Rohit");
console.log("monika" && "");

console.log(false&& false);
console.log("" && "");

let t=0;
let v=0;
let u=23;
let i=9;
console.log(t && u);
console.log(u && t);
console.log(i && u);

console.log(t||u);
console.log(i || t);
console.log(t && v);


console.log(0.1+0.2);
console.log((0.1+0.2).toFixed(1));
console.log(typeof ((0.1+0.2).toFixed(1)));

console.log(Number((0.1+0.2).toFixed(1)));
console.log(typeof (Number((0.1+0.2).toFixed(1)))); // point nantar 1 digit show kr




//create number object
let num=new Number(20);
console.log(num);


//number madhle kiti digit dakhvayche
let vars=1.5;
console.log(vars.toPrecision(5));
