const form = document.querySelector("form");
const task = document.querySelector("#tasks");   // Correct selector
const input = document.querySelector(".task");   // Select input by class

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const text = input.value.trim();

    if(text == ""){
        return;
    }

    const parent = document.createElement("div");

    const tasks = document.createElement("span");
    tasks.textContent = text;
    tasks.style.marginRight = "20px";

    const deleteb = document.createElement("button");
    deleteb.textContent = "Delete";
    deleteb.style.width = "60px";

    const doneb = document.createElement("button");
    doneb.textContent = "Done";
    doneb.style.width = "60px";
    doneb.style.marginRight = "10px";

    parent.append(tasks, doneb, deleteb);

    task.append(parent);

    input.value = "";   // Clear input after adding

    deleteb.addEventListener("click", () => {
        parent.remove();
    });

    doneb.addEventListener("click", () => {
        tasks.style.textDecoration = "line-through";
        tasks.style.color = "black";   // "black" should be a string
    });

});