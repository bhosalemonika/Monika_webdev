const p1 = new Promise((resolve, reject) => {

    resolve("Hello");

});

p1
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });