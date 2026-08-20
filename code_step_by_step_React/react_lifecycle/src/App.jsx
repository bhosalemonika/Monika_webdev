import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Counter from "./Counter"

function App() {
  const [count, setCount] = useState(0);
  const [data,setdata]=useState(0);
  const[display,setDisplay]=useState(true);

  return (
    <>
     {
      display? <Counter count={count} data={data}/> :null
     }
     <button onClick={()=>setCount(count+1)}>Counter</button>
      <button onClick={()=>setdata(data+1)}>Data</button>
       <button onClick={()=>setDisplay(!display)}>Toggle</button>
    </>
  )
}

export default App
