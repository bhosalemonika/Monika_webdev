const newEl=document.createElement("h2");
newEl.textContent="Strike is coming";
newEl.id="second";

const element=document.getElementById("first");
element.after(newEl);

const newEl2=document.createElement("h3");
newEl2.textContent="New Batch is coming";
newEl2.id="second";
// newEl2.className="sec";
// newEl2.className="seco";

newEl2.classList.add("divali");
newEl2.classList.add("holi");
newEl2.classList.remove("holi");

newEl2.style.backgroundColor="red";
newEl2.style.fontSize="28px";
newEl2.setAttribute("Hello","JII");

element.before(newEl2);

console.log(newEl2);
console.log(newEl2.getAttribute("Hello"));


const list=document.createElement("li");
list.textContent="Milk";
const list2=document.createElement("li");
list2.textContent="Tea";
const list3=document.createElement("li");
list3.textContent="Paneer";

const unorder=document.getElementById("listing");
unorder.append(list);
unorder.append(list2);
unorder.prepend(list3);

const arr=["halwa","Milk","Tea","Paneer"];
const unorderdoc=document.getElementById("listing");
const fragment=document.createDocumentFragment();
for(let food of arr){
    const lis=document.createElement("li");
    lis.textContent=food;
    fragment.append(lis);

}


unorderdoc.append(fragment);

const month=document.getElementById("ten");
console.log(month.children);


const listner=document.createElement("lis");
listner.textContent="heloo";
// month.insertAdjacentElement("afterend",listner)
listner.innerHTML="<h2>Help</h2>";
month.prepend(listner);


