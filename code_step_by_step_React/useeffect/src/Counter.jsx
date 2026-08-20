import { useState, useEffect } from "react";

function Counter() {

  const [count, setCount] = useState(0);
  const [data, setData] = useState(0);

  useEffect(() => {
    console.log("Count changed");
  }, [count]);

  useEffect(() => {
    console.log("Data changed");
  }, [data]);

  return (
    <>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Count
      </button>

      <h1>Data: {data}</h1>

      <button onClick={() => setData(data + 1)}>
        Data
      </button>
    </>
  );
}

export default Counter;