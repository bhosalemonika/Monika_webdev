import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [val, setVal] = useState("monika bhosale")

  return (
    <>
      <h1>My Name Is:</h1>
      <input type="text" placeholder='enter your name' onChange={(event)=>setVal(event.target.value)} value={val}/>

      <h1>{val}</h1>
      <button onClick={()=>setVal("")}>clear</button>
    </>
  )
}

export default App
