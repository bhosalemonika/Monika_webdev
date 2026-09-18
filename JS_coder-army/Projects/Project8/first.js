const body=document.querySelector('body');
body.addEventListener('click',(e)=>{
    console.log(e.clientX,e.clientY);

    const circle=document.createElement('div');
    circle.classList.add('circle');
    circle.textContent="HI"

    const color=['red','blue','blue','orange','pink','purple'];
    circle.style.backgroundColor=color[Math.floor(Math.random()*6)];

    circle.style.top= `${e.clientY-25}px`;
    circle.style.left= `${e.clientX-25}px`;

    body.append(circle);
    setTimeout(()=>{
        circle.remove();
     
    },5000)
})