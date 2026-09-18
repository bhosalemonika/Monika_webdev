"use strict";

const user = {
    name: "Rohit",

    greet: function () {
        console.log(this);
        const that=this;

        function meet() {
            console.log(that);
        }

        meet();
    }
};

user.greet();


console.log(this);