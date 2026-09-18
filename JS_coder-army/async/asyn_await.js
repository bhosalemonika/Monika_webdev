async function github() {
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();
    console.log(data);
}

github()
console.log("Hello World");