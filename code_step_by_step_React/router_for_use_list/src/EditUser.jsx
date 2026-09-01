import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();

  const url = "http://localhost:3000/users";

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    const response = await fetch(url + "/" + id);
    const data = await response.json();

    setFirstName(data.firstName);
    setLastName(data.lastName);
    setAge(data.age);
  };

  const updateUser = async () => {
    const response = await fetch(url + "/" + id, {
      method: "PUT",
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        age: age,
      }),
    
    });

    if (response) {
      alert("User updated");
      navigate("/users");
    }
  };

  return (
    <div>
      <h1>Edit User</h1>

      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <br />
      <br />

      <input
        type="number"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <br />
      <br />

      <button onClick={updateUser}>Update User</button>
    </div>
  );
}