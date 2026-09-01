import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
    const url = "http://localhost:3000/users";

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    setUserData(data);
    setLoading(false);
  };

  return (
    <div>
      <h1>Integrate JSON Server API and Loader</h1>

      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <>
          <ul className="user-list">
            <li>First Name</li>
            <li>Last Name</li>
            <li>Age</li>
          </ul>

          {userData.map((user) => (
            <ul className="user-list-names" key={user.id}>
              <li>{user.firstName}</li>
              <li>{user.lastName}</li>
              <li>{user.age}</li>
            </ul>
          ))}
        </>
      )}
    </div>
  );
}