import College from "./College";
import { SubjectContext } from "./CreateContext";
import { useState } from "react";

function App(){
  const [subject,setSubject]=useState("");
  return(
  <div style={{backgroundColor:"orange",padding:10}}>
    <SubjectContext.Provider value={subject}>
      <select defaultValue={subject} onChange={(event)=>setSubject(event.target.value)}>
        <option value="" >Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="History">History</option>
        <option value="English">English</option>
      </select>
    <h1>Context ApI</h1>
    <College/>
    </SubjectContext.Provider>
    <button onClick={()=>setSubject("")}>Clear</button>
    </div>
  );
}
export default App;