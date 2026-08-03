
//foreach
const arr = [10, 20, 30, 5, 90, 87];
let sum = 0;
arr.forEach((number) => {
    sum += number;
});

console.log(sum);


//filter

const arr1 = [10, 20, 30, 5, 90, 87];
const newArr = arr1.filter((number) => number > 25);
console.log(newArr);

// let obj={
//     name:"Rohit",
//     deposite:function(amount){
//         console.log(amount);
//     }
// }
// obj.deposite(500);




const arr2 = [1, 2, 3, 45, 6];
arr2.filtering = function(compare) {
    const ans = [];
    for (let num of this) {
        if (compare(num)) {
            ans.push(num);
        }
    }
    return ans;
}
const newarr = arr2.filtering((num) => num > 5);
console.log(newarr);


//map
const aarr4=[12,3,4,5,6,56];
const newa=aarr4.map((num)=>num*3);
console.log(newa);


//filter method
console.log("/n/n");
const products = [

    // Electronics
    { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
    { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
    { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
    { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
    { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

    // Books
    { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
    { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
    { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },
    { id: 9, name: "Atomic Habits", category: "Books", price: 20, inStock: true },
    { id: 10, name: "Clean Code", category: "Books", price: 40, inStock: true },

    // Clothing
    { id: 11, name: "T-Shirt", category: "Clothing", price: 15, inStock: true },
    { id: 12, name: "Jeans", category: "Clothing", price: 50, inStock: false },
    { id: 13, name: "Jacket", category: "Clothing", price: 100, inStock: true },
    { id: 14, name: "Sneakers", category: "Clothing", price: 90, inStock: true },
    { id: 15, name: "Cap", category: "Clothing", price: 18, inStock: false },

    // Grocery
    { id: 16, name: "Rice", category: "Grocery", price: 45, inStock: true },
    { id: 17, name: "Milk", category: "Grocery", price: 3, inStock: true },
    { id: 18, name: "Bread", category: "Grocery", price: 4, inStock: false },
    { id: 19, name: "Eggs", category: "Grocery", price: 8, inStock: true },
    { id: 20, name: "Coffee", category: "Grocery", price: 15, inStock: true }

];

const newProd=products.filter((product) =>product.price>25);
console.log(newProd);

const newProd1=products.filter((product) =>product.price>25).sort((a,b)=>b.price-a.price);
console.log("/n");
console.log(newProd1);


//method
const ans=products.map((product)=>({name:product.name,price:product.price}))
console.log(ans);

//reduce
const totalPrice = products.reduce((accumulator, currentValue) => {
    if (currentValue.inStock)
        return accumulator + currentValue.price;
    else
        return accumulator;

}, 0);

console.log(totalPrice);