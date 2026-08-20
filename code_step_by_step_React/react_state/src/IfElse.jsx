import {useState} from "react"

function Increase(){
    const [count,setCount]=useState(0);

    return(
        <>
        <button onClick={()=>setCount(count+1)}>Increase</button>
        {
            count==0?<h1>condition 0</h1>
            :count==1?<h1>condition 1</h1>
            :count==2?<h1>condition 2</h1>
            :count==3?<h1>condition 3</h1>
            :count==4?<h1>condition 4</h1>
            :<h1>Other condition</h1>
        }
        <h1>{count}</h1>
        </>
    );
}
export default Increase;