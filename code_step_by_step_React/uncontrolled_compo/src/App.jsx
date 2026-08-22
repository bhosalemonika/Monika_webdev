import { useRef } from "react";

function App() {

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const handleFormref = (event) => {
    event.preventDefault();

    const user = usernameRef.current.value;
    const password = passwordRef.current.value;

    console.log(user);
    console.log(password);
  };

  return (
    <>
      <h1>Uncontrolled Component with useRef</h1>

      <form onSubmit={handleFormref}>

        <input
          type="text"
          ref={usernameRef}
          placeholder="Enter your name"
        />

        <br /><br />

        <input
          type="password"
          ref={passwordRef}
          placeholder="Enter password"
        />

        <br /><br />

        <button>Submit with Ref</button>

      </form>
    </>
  );
}

export default App;