import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <input
        type="text"
        value={name}
        placeholder="Enter your name"
        onChange={(event) => setName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="password"
        value={password}
        placeholder="Enter your password"
        onChange={(event) => setPassword(event.target.value)}
      />

      <br />
      <br />

      <input
        type="email"
        value={email}
        placeholder="Enter your email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <br />
      <br />

      <button>Submit</button>

      <button
        onClick={() => {
          setName("");
          setPassword("");
          setEmail("");
        }}
      >
        Clear
      </button>

      <h3>{name}</h3>
      <h3>{password}</h3>
      <h3>{email}</h3>
    </>
  );
}

export default App;