import { useState } from "react";
import "./App.css"

function App() {
  const [nameErr, setNameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");

  const handleName = (event) => {
    if (event.target.value.length < 5) {
      setNameErr("Username must be at least 5 characters");
    } else {
      setNameErr("");
    }
  };

  const handlePassword = (event) => {
    const regex = /^[A-Z0-9]+$/;

    if (event.target.value.length < 5) {
      setPasswordErr("Password must be at least 5 characters");
    } else if (!regex.test(event.target.value)) {
      setPasswordErr("Use only capital letters and numbers");
    } else {
      setPasswordErr("");
    }
  };

  return (
    <div>
      <h1>Simple Validation</h1>

    
      <input
        className={nameErr ? "error" : ""}
        type="text"
        placeholder="Enter username"
        onChange={handleName}
      />

      {nameErr && <span>{nameErr}</span>}

      <br />
      <br />

  
      <input
        className={passwordErr ? "error" : ""}
        type="password"
        placeholder="Enter password"
        onChange={handlePassword}
      />

      {passwordErr && <span>{passwordErr}</span>}

      <br />
      <br />

      <button disabled={passwordErr}>Submit</button>
    </div>
  );
}

export default App;