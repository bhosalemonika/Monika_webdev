let a=10;
if (true){
    console.log(a);
    var b=20;
    console.log(b);
}
function greet(){
    console.log(a);
    var c=30;
    console.log(c);
}
greet();
//cant access varibale after function scope
// console.log(c);

//can access varible in tialise by var in block scope
console.log(b);



// clousure

function createCounter() {
    let count = 0;

    function increment() {
        count++;
        return count;
    }

    return increment;
}

const counter = createCounter();
console.log("/n");
console.log(counter());
console.log(counter());
console.log(counter());




function createBankAccount() {
    let balance = 500;
    const user = {
        deposit: function (amount) {
            if (typeof amount === "number" && amount > 0) {
                balance += amount;
                return balance;
            }
        },

        withdraw: function (amount) {
            if (
                typeof amount === "number" &&
                amount > 0 &&
                balance >= amount
            ) {
                balance -= amount;
                return balance;
            }
        },

        getBalance: function () {
            return balance;
        }

    };
    return user;
}
const customer = createBankAccount();
console.log(customer);
console.log(customer.getBalance()); // 500
console.log(customer.deposit(200)); // 700
console.log(customer.withdraw(100)); // 600
console.log(customer.getBalance()); // 600



//higher oder function 

function double(value) {
    return function execute(num) {
        return num * value;
    };
}
const n = double(20)(5);
console.log(n);
// console.log(n(5));   // 100
