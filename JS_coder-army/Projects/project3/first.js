const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const partner1 = document.getElementById("partner1");
    const partner2 = document.getElementById("partner2");

    const l1 = partner1.value.length;
    const l2 = partner2.value.length;
    const result = Math.pow(l1 + l2, 3) % 101;
    console.log(result)
    document.getElementById("result").textContent =
        `Love Percentage is: ${result}% ❤️`;

    

    form.reset();
});