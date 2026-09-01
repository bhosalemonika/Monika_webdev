import { useState } from "react";

export default function AddUser() {
  const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");


  const createUser = async () => {
    console.log(name,lastName, age,);

    const url = "http://localhost:3000/users";

    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        firstName: name,
       
        lastName: lastName,
         age: age,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (response) {
      alert("New user added");
    }
  };

  return (
    <div>
      <h1>Add User</h1>

      <input
        type="text"
        placeholder="First Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <br />
      <br />

       <input
        type="lastName"
        placeholder="lastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      
      <br />
      <br />


      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />

     
      <button onClick={createUser}>Add User</button>
    </div>
  );
}