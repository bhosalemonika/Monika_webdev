// import { useRef } from 'react'


// function App() {
//  const inputRef=useRef(null);

//  const inputHaandler=()=>{
//   console.log(inputRef);
//   inputRef.current.focus();
//   inputRef.current.style.color="red"
//   inputRef.current.placeholder="enter password"
//   inputRef.current.value='123'
//  }
// const toggleHandler=()=>{
//   if(inputRef.current.style.display!='none'){
//     inputRef.current.style.display='none'
//   }
//   else{
//     inputRef.current.style.display='inline'
//   }
// }

//   return (
//     <>
//       <h1>useRef</h1>
//       <button onClick={toggleHandler}>Toggle</button>
//       <input ref={inputRef} type="text" placeholder='enter your name' />
//       <button onClick={inputHaandler}>Focus on Input Field</button>
//     </>
//   )
// }

// export default App



import { useRef } from "react";

function App() {
  const count = useRef(0);

  function increase() {
    count.current = count.current + 1;

    console.log(count.current);
  }

  return (
    <button onClick={increase}>
      Increase {count.current}
    </button>
  );
}

export default App