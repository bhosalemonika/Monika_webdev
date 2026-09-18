console.log(global);

var a=10;
console.log(global.a);




function greet() {
    console.log(this.name);
}

const user = {
    name: "Monika",
    age:30
};

greet.call(user);



function increment(value){
    this.age+=value;
    this.name=this.name;
    console.log(this.age);
}

increment.call(user,5);
increment.apply(user,[10,"ram"]);

const inc=increment.bind(user,30,"raj");

inc();
