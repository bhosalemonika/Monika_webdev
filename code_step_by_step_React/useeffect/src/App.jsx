import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from "./Counter"
import PropC from "./Props"
function App() {

const[count,setCount]=useState(0);

  return (
    <>
     <Counter/>
     <h2>Handle side effect of props</h2>
     <PropC count={count}/>
      <button onClick={()=>setCount(count+1)}>Counter {count}</button>
    </>
  )
}

export default App
