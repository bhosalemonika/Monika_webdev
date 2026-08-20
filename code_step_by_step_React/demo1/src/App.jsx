import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from './User'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Count Val :{count}</h1>
      <User/>
      <button onClick={()=>setCount(count+1)}> Increase count </button>
    </>
  )
}

export default App
