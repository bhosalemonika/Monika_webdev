import { useState } from 'react'
import './App.css'
import Counter from './counter'
import Increase from "./IfElse"

function App() {
const [fruit,setFruit]=useState("Mango");
const [display,setDisplay]=useState(true);
const handleFruit=()=>{
  setFruit("Banana");
}
  return (
    <>
     <button onClick={handleFruit}>Change name</button>
     <h1>{fruit}</h1>
     <Counter/>
     {
     display?<h1>Monika Bhosale</h1>:null
     }
     <button onClick={()=>{
      setDisplay(!display)
     }}>Toggle</button>
     <Increase/>
     </>
  )
}

export default App
