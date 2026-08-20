import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
 

  function callMe(){
    alert("i am clicked")
  }

function Fruit(name){
  alert(name);
}

  return (
    <>
    <h1>Function Call</h1>
    <button onClick={callMe}>Click</button>
    <button onClick={()=>Fruit("Mango")}>mango</button>
     <button onClick={()=>Fruit("Apple")}>Apple</button>
    </>
  )
}

export default App
