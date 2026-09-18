const h=document.querySelector('h1');

setInterval(()=>{
    let time=new Date();
    h.textContent=time.toLocaleTimeString();
},1000)