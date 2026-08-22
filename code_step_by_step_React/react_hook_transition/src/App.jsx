import { useTransition } from "react";

function App(){
  const[pending,startTransition]=useTransition();

  const handleButton=()=>{

    startTransition(async ()=>{
      await new Promise(res=>setTimeout(res,7000))
    })

  }
  return(
    <>
    <h1>userTransition Hook</h1>
    {
      pending? <img style={{width:"200px"}}src="https://images.unsplash.com/photo-1597848212624-a19eb35e2651?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3VuZmxvd2VyfGVufDB8fDB8fHww"/>:null
    }
    <button  disabled={pending} onClick={handleButton}>click</button>
    </>
  );
}

export default App;