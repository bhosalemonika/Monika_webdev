
const element=document.getElementById("first");
 element.onclick=function handleClick(){
    element.textContent="Strike is coming";
 }

//when we write second method of onclick first one is ovverride second shows
//  element.onclick=function handleClick(){
//     element.textContent="I am the Best";
//  }


//  element.addEventListener('click',()=>{
//     element.textContent="strike is coming";
//  })
//  element.addEventListener('click',()=>{
//     element.style.backgroundColor="pink"
//  })

//  element.addEventListener('mouseleave',()=>{
//     element.style.backgroundColor="brown";
//  })




//  const child1=document.getElementById("child1");
//  child1.addEventListener('click',()=>{
//     child1.textContent="I am clicked";
//  })

//  const parent=document.getElementById("parent");
//  console.log(parent.children);

// for(let child of parent.children){
//     child.addEventListener('click',()=>{
//         child.textContent="I am clicked"
//     })
// }


const parent=document.getElementById("parent");
parent.addEventListener('click',(e)=>{
   e.target.textContent="I am clicked";
})

