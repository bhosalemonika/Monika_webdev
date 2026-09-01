import { useReducer } from "react";

const emptyData = {
  name: "",
  password: "",
  email: "",
  city: "",
  address: "",
};

const reducer = (data, action) => {
  return {
    ...data,
    [action.type]: action.val,
  };
};

function App() {
  const [state, dispatch] = useReducer(reducer, emptyData);

  const handleSubmit = () => {
    console.log(state);
  };

  return (
    <div>
      <h1>Use Reducer</h1>

      <input
        type="text"
        onChange={(event) =>
          dispatch({
            type: "name",
            val: event.target.value,
          })
        }
        placeholder="Enter name"
      />

      <br />
      <br />

      <input
        type="password"
        onChange={(event) =>
          dispatch({
            type: "password",
            val: event.target.value,
          })
        }
        placeholder="Enter password"
      />

      <br />
      <br />

      <input
        type="email"
        onChange={(event) =>
          dispatch({
            type: "email",
            val: event.target.value,
          })
        }
        placeholder="Enter email"
      />

      <br />
      <br />

      <input
        type="text"
        onChange={(event) =>
          dispatch({
            type: "city",
            val: event.target.value,
          })
        }
        placeholder="Enter city"
      />

      <br />
      <br />

      <input
        type="text"
        onChange={(event) =>
          dispatch({
            type: "address",
            val: event.target.value,
          })
        }
        placeholder="Enter address"
      />

      <br />
      <br />

      <button onClick={handleSubmit}>Submit</button>

      <h3>Values:</h3>
      <p>Name: {state.name}</p>
      <p>Password: {state.password}</p>
      <p>Email: {state.email}</p>
      <p>City: {state.city}</p>
      <p>Address: {state.address}</p>
    </div>
  );
}

export default App;