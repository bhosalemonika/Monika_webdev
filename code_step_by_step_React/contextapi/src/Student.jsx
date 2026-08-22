
import { useContext } from "react";
import Subject from "./Subject"
import { SubjectContext } from "./CreateContext";
export default function Student(){
   
    return(
         <div style={{backgroundColor:"pink",padding:10}}>
            <h1> Student Component</h1>
            <Subject/>
         </div>
    );
}