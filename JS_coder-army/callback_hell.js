// //zomato

// function placeOrder(orderDetails,callback){
//     console.log(`${orderDetails.cost} Payment is in progress`);

//     setTimeout(()=>{
//         console.log("Payment is received and order get placed");
//         orderDetails.status=true;
//         callback();
//     },3000)

// }

// function preparingOrder(orderDetails,callback){
//     console.log("Food is prearing");

//     setTimeout(()=>{
//         console.log("Your order is now prepared");
//         callback();
//     },3000)
// }

// function deliverOrder(){
//     console.log("I am on the way to deliver order");
//     setTimeout(()=>{
//         console.log("Order delivered succesfully");
//     },3000)
// }
// function pickupOrder(callback){
//     console.log("delivery boy is on the pickup order");
//     setTimeout(()=>{
//         console.log("I have pick up the order");
//         callback();
//     })
// }

// const orderDetails={
//     orderId:123123,
//     food:["pizza","biryanai","coke"],
//     cost:650,
//     status:false,
//     customer_name:"Monika",
//     customer_location:"Pune",
//     restaurant_location:"Delhi"
// }

// placeOrder(orderDetails,()=>{
//     preparingOrder(orderDetails,()=>{
//         pickupOrder(()=>{
//             deliverOrder();
//         });
//     });
// });





function placeOrder(orderDetails, callback) {
    console.log(`${orderDetails.cost} Payment is in progress...`);

    setTimeout(() => {
        console.log("Payment received.");
        console.log("Order placed successfully.");

        orderDetails.status = true;

        callback(orderDetails);
    }, 3000);
}

function preparingOrder(orderDetails, callback) {
    console.log("Food is preparing...");

    setTimeout(() => {
        console.log("Food is prepared.");

        callback(orderDetails);
    }, 3000);
}

function pickupOrder(orderDetails, callback) {
    console.log("Delivery boy is going to pick up the order...");

    setTimeout(() => {
        console.log("Order picked up by delivery boy.");

        callback(orderDetails);
    }, 3000);
}

function deliverOrder(orderDetails) {
    console.log("Delivery boy is on the way...");

    setTimeout(() => {
        console.log("Order delivered successfully!");

        console.log("Final Order Details:");
        console.log(orderDetails);
    }, 3000);
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

placeOrder(orderDetails, (orderDetails) => {

    preparingOrder(orderDetails, (orderDetails) => {

        pickupOrder(orderDetails, (orderDetails) => {

            deliverOrder(orderDetails);

        });

    });

});