
// function placeOrder(orderDetails) {
//     console.log(`${orderDetails.cost} Payment is in progress...`);

//     const p1=new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("Payment received.");
//         console.log("Order placed successfully.");

//         orderDetails.status = true;
//     }, 3000);
// })
//     }
    
    

// function preparingOrder(orderDetails) {
//     console.log("Food is preparing...");

//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//         console.log("Food is prepared.");
//     }, 3000);
// })
// }

    
// function pickupOrder(orderDetails) {
//     console.log("Delivery boy is going to pick up the order...");

//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Order picked up by delivery boy.");
//     }, 3000);
// })}


// function deliverOrder(orderDetails) {
//     console.log("Delivery boy is on the way...");

//     return new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         console.log("Order delivered successfully!");

//         console.log("Final Order Details:");
//         console.log(orderDetails);
//     }, 3000);
// })}

// const orderDetails = {
//     orderId: 123123,
//     food: ["Pizza", "Biryani", "Coke"],
//     cost: 650,
//     status: false,
//     customer_name: "Monika",
//     customer_location: "Pune",
//     restaurant_location: "Delhi"
// };


// placeOrder(orderDetails)
// .then((orderDetails)=>preparingOrder(orderDetails))
// .then((orderDetails)=>pickupOrder(orderDetails))
// .then((orderDetails)=>deliverOrder(orderDetails))
// .then((orderDetails)=>{
//     console.log(orderDetails);
// }).catch((error)=>{
//     console.log("error");
// })


function placeOrder(orderDetails) {
    console.log(`${orderDetails.cost} Payment is in progress...`);

    return new Promise((resolve, reject) => {
        setTimeout(() => {

            if(Math.random()>0.1){

            console.log("Payment received.");
            console.log("Order placed successfully.");

            orderDetails.status = true;

            resolve(orderDetails);
            }
            else{
                reject("Payement failed");
            }
        }, 3000);
    });
}

function preparingOrder(orderDetails) {
    console.log("Food is preparing...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(Math.random()>0.05){
            console.log("Food is prepared.");

            resolve(orderDetails);
            }
            else{
                reject("Food is not ready")
            }
        }, 3000);
    });
}

function pickupOrder(orderDetails) {
    console.log("Delivery boy is going to pick up the order...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order picked up by delivery boy.");

            resolve(orderDetails);
        }, 3000);
    });
}

function deliverOrder(orderDetails) {
    console.log("Delivery boy is on the way...");

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Order delivered successfully!");

            resolve(orderDetails);
        }, 3000);
    });
}

const orderDetails = {
    orderId: 123123,
    food: ["Pizza", "Biryani", "Coke"],
    cost: 650,
    status: false,
    customer_name: "Monika",
    customer_location: "Pune",
    restaurant_location: "Delhi"
};

placeOrder(orderDetails)
    .then((orderDetails) => preparingOrder(orderDetails))
    .then((orderDetails) => pickupOrder(orderDetails))
    .then((orderDetails) => deliverOrder(orderDetails))
    .then((orderDetails) => {
        console.log("Final Order Details:");
        console.log(orderDetails);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(()=>{
        console.log("I am doing cleanup");
    })