 import { useState,useEffect} from 'react' 
  
  const Clock=({color})=>{
  const [time,setTime]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
      setTime(new Date().toLocaleTimeString());
    },1000);
  },[])
  return (
    <>
      <h1 style={{color:color,backgroundColor:"black",width:"200px"}}>{time}</h1>
    </>
  )
}
export default Clock;