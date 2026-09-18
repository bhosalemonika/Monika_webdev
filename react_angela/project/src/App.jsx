import { useState } from "react";

function App() {
  const [isDone, setIsDone] = useState(false);

  return (
    <div>
      <p
        style={{
          textDecoration: isDone ? "line-through" : "none"
        }}
      >
        Buy milk
      </p>

      <button onClick={() => setIsDone(!isDone)}>
        {isDone ? "Undo" : "Done"}
      </button>
    </div>
  );
}

export default App;