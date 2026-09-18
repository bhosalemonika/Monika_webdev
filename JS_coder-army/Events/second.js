const grandp=document.getElementById("grandparent");
grandp.addEventListener('click',()=>{
    console.log("Grandparent is clicked");
},)

const parent=document.getElementById("parent");
parent.addEventListener('click',()=>{
    console.log("parent is clicked");
},)
const child=document.getElementById("child");
child.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target);
    e.stopPropagation();

},true)