import { useContext } from "react";
import { SubjectContext } from "./CreateContext";


export default  function Subject(){
    const subject=useContext(SubjectContext);
    return(
        <div style={{backgroundColor:"red",padding:10}}>
        <h1>subject is :{subject}</h1>
        </div>
    );
}