class Student {

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log("Hello");
    }

}
let s1 = new Student("Monika", 22);
let s2 = new Student("Rahul", 21);

console.log(s1);
console.log(s2);
console.log(Student.prototype);

console.log(s1.constructor === s2.constructor);
console.log(s1.__proto__ === s2.__proto__);


class CollegeStudent extends Student {
    constructor(name,age,rollno){
        super(name,age);
        this.rollno=rollno;
    }

    checckRoll(){
        return this.rollno;
    }
}
let s3=new CollegeStudent("Mohan",33,12);
console.log(s3);
s3.greet();


const obj={
    name: "ram",
    age:30
}

const obj2=Object.create(obj);
obj2.roll=50;

console.log(obj2.name);