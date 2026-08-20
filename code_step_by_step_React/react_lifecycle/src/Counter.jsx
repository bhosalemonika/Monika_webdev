import { useEffect } from "react";

function Counter({count,data}){

    useEffect(()=>{
        console.log("mounting phase")
    },[])

     useEffect(()=>{
        console.log("update count phase")
    },[count,data])


    useEffect(() => {
    console.log("Mounted");

    return () => {
        console.log("Unmounted");
    };
}, []);

    return(
        <>
        <h1>Counter Value {count}</h1>
        <h1>Data Value {data}</h1>
        </>
    );
}
export default Counter;