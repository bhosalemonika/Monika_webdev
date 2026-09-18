const button1 = document.getElementById("bt1");
const button2 = document.getElementById("bt2");
const button3 = document.getElementById("bt3");

button1.addEventListener("click", () => {
    button1.textContent = "Button1 Clicked";
    console.log("Button1 Clicked");
});

button2.addEventListener("click", () => {
    button2.textContent = "Button2 Clicked";
    console.log("Button2 Clicked");
});

button3.addEventListener("click", () => {
    button3.textContent = "Button3 Clicked";
    console.log("Button3 Clicked");
});

console.log("Last");