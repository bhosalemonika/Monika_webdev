import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const name="";
  const data="Core2web"
  const arr={name:"Yash",age:22}
  let x=10;
  let y=20;
  function Fruit(){
    return "APPLE"
  }
  function Sum(a,b){
    return a+b;
  }
  function Operation(a,b,op){
      if(op=="+"){
        return a+b;
      }
      else if(op=="-"){
        return a-b;
      }
      else{
        return a*b;
      }
  }
  let path="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdvJ7YBJMaEbBBMA5TIrspK3zIDoFypU2W6fDoE9bVrw&s"

  const oj=["Monika","Bhosale","Yash"];
  return (
    <>
     <h1>{data}</h1>
     <h1>{x+y}</h1>
     <h1>{Fruit()}</h1>
     <h1>{Sum(10,10)}</h1>
     <h1>{Operation(5,5,"+")}</h1>
     <h1>{name?name:"Name not found"}</h1>
     <h1>{oj[1]}</h1>
     <h1>{arr.age}</h1>
     <img src={path}/>
     <input type="text" value={name}/>
    </>

  )
}

export default App
