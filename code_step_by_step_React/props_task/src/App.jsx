
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { useState } from "react";
import Clock from "./clock"

function App() {
  const[color,setColor]=useState("green")

function handleColorChange(event) {
    setColor(event.target.value);
  }

  return(
    <>
    <h1>Digital CLock</h1>
        <select value={color} onChange={handleColorChange}>
      <option value={"red"}>Red</option>
       <option value={"green"}>green</option>
        <option value={"blue"}>blue</option>
         <option value={"yellow"}>yellow</option>
    </select>
    <Clock  color={color} />

    </>
  );
}

export default App
