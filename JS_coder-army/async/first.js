async function greet(){
    return new Promise((resolve,reject)=>{
        resolve("Monika");
    })
}
const response=greet();
response.then((data)=>console.log(data))
.catch((error)=>{
    console.log("Error:",error);
})