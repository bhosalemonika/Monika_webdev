// console.log("Hello world start");

// const p1=fetch("https://api.github.com/users");
// console.log(p1);

// const p2=p1.then((response)=>{
//     return response.json();
// })

// p2.then((response)=>{
//     console.log(response);
// })




fetch("https://api.github.com/users").then((response)=>{
    console.log(response);
    if(!response.ok){
        throw new Error("Data is not present in server");
    }
    return response.json();
})
.then((data)=>{
    console.log(data);


const parent=document.getElementById("first");

for(i=0;i<data.length;i++){
const image=document.createElement('img');
image.src=data[i].avatar_url;
image.style.height="80px";
parent.append(image);
}
})
.catch((error)=>{
    const parent=document.getElementById("first");
    parent.textContent=error.message;
})