async function github() {
    console.log("Hello World");

    try{
    const response = await fetch("https://api.github.com/users");
    const data = await response.json();

        if(!response.ok){
            throw new Error("data not present");
        }

    const parent = document.getElementById("cont");

    for (let user of data) {

        const element = document.createElement("div");
        element.classList.add("user");

        const image = document.createElement("img");
        image.src = user.avatar_url;

        const userName = document.createElement("h2");
        userName.textContent = user.login;

        const anchor = document.createElement("a");
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";


        element.append(image, userName, anchor);
        parent.append(element);
        parent.style.position="relative"
    }
}

catch(error){
    console.log("error")
}
}


github();