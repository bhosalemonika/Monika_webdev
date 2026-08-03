const grandp=document.getElementById("grandparent");
grandp.addEventListener('click',()=>{
    console.log("Grandparent is clicked");
},false)

const parent=document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("parent is clicked");
},false)
const child=document.getElementById("child");
child.addEventListener('click',()=>{
    console.log("child is clicked");
},false)