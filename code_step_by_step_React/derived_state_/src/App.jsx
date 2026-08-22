import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState("");

  const handleAddUsers = () => {
    setUsers([...users, user]);
    setUser("");
  };

  const totalUsers = users.length;

  return (
    <div>
      <h2>Total User: {totalUsers}</h2>

      <h2>
        Last User: {users.length > 0 ? users[users.length - 1] : "No User"}
      </h2>

      <h2>Unique Total User: {new Set(users).size}</h2>

      <input
        type="text"
        value={user}
        onChange={(event) => setUser(event.target.value)}
        placeholder="Add new user"
      />

      <button onClick={handleAddUsers}>Add User</button>

      {users.map((item, index) => (
        <h4 key={index}>{item}</h4>
      ))}
    </div>
  );
}

export default App;