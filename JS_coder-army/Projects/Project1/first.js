
const quotes = [
    "Success doesn't come from what you do occasionally; it comes from what you do consistently.",
    "Small progress every day adds up to big results.",
    "The best time to start was yesterday. The next best time is now."
];

const select = document.querySelector("button");
const quote = document.querySelector("h1");

select.addEventListener("click", () => {
    const index = Math.floor(Math.random() *3);
    quote.textContent = quotes[index];
});