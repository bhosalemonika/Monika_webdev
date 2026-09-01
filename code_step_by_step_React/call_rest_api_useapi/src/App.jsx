import React, { Suspense, use } from "react";

// API Promise
const fetchData = () =>
  fetch("https://dummyjson.com/users")
    .then((response) => response.json());

// Create resource
const userResource = fetchData();

export default function App() {
  return (
    <div>
      <h1>Use API in React JS</h1>

      <Suspense fallback={<p>Loading....</p>}>
        <Users userResource={userResource} />
      </Suspense>
    </div>
  );
}

const Users = ({ userResource }) => {
  // Read the Promise using use()
  const userData = use(userResource);

  console.log(userData.users);

  return (
    <div>
      <h2>Users List</h2>

      {userData.users.map((user) => (
        <div key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>

          <p>Email: {user.email}</p>
          <p>Age: {user.age}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};