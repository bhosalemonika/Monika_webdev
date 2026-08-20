import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
const[gender,setGender]=useState("female");
const[city,setCity]=useState("Pune");
  return (
    <>
     <h1>Handle radio Button and radioButton</h1>
     <h4>Select gender</h4>
     <input type="radio" name="gender" id="male"   onChange={(event)=>setGender(event.target.value)}  value="male"  checked={gender=="male"}/>
     <label htmlFor='male'>Male</label>
      <input type="radio" name="gender" id="female"  onChange={(event)=>setGender(event.target.value)}  value="female"  checked={gender=="female"}/>
        <label htmlFor='female'>Male</label>
        <h2>selected gender {gender}</h2>


        <br/><br/>

        <h4>Select city</h4>
        <select onChange={(event)=>setCity(event.target.value)} defaultValue={"delhi"}>

          <option value="noida">Noida</option>
          <option value="Gurgav">Gurgav</option>
          <option value="Delhi">Delhi</option>
          <option value="Nagar">Nagar</option>
        </select>
        <h2>selected city {city}</h2>
    </>
  )
}

export default App
