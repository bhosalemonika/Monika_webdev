import { useEffect } from "react";


const PropC=({count})=>{

    const handleCounter=()=>{
        console.log("HandleCounter called");
    }

    useEffect(()=>{
        handleCounter();
    },[])

    return(
        <div>
            <h1>Counter value:  {count}</h1>
           
        </div>
    );


}
export default PropC;

