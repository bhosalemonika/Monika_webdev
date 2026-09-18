
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

 async function ordering(){
    try{
        const respose1=await placeOrder(orderDetails);
        const respose2=await preparingOrder(respose1);
        const respose3=await pickupOrder(respose2);
        const respose4=await deliverOrder(respose3);

        console.log(respose4);
    }
    catch(error){
        console.log(error);
    }
 }

 ordering();