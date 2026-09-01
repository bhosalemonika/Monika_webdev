import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    getUsersData();
  }, []);

  async function getUsersData() {
     const url = "http://localhost:3000/users";

    const response = await fetch(url);
    const data = await response.json();

    setUsersData(data);
  }

  console.log(usersData);

  return (
    <div>
      <h1>Fetch data from API</h1>

      <ul className="user-list">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>

      {usersData &&
        usersData.map((user) => (
          <ul className="user-list-names" key={user.id}>
            <li>{user.firstName}</li>
            <li>{user.lastName}</li>
            <li>{user.age}</li>
          </ul>
        ))}
    </div>
  );
}