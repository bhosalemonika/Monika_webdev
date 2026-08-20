import "./App.css";
import User from "./User";

function App() {
  const useArr = [
    {
      name: "mon",
      age: 22,
      email: "mon@gmail.com",
      id: 1
    },
    {
      name: "yash",
      age: 32,
      email: "yash@gmail.com",
      id: 2
    },
    {
      name: "Radha",
      age: 42,
      email: "radha@gmail.com",
      id: 3
    }
  ];

  return (
    <>
      <h1>User List</h1>

      {useArr.map((user) => (
        <div key={user.id}>
          <User user={user} />
        </div>
      ))}
    </>
  );
}

export default App;