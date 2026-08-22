import { useState } from "react";

function App() {
  const [data, setData] = useState({
    name: "Monika",
    address: {
      city: "Pune",
      country: "India"
    }
  });

  const handleName = (val) => {
    data.name = val;

    setData({ ...data });
  };

  const handleCity = (val) => {
    data.address.city = val;

    setData({
      ...data,
      address: {
        ...data.address
      }
    });
  };

  return (
    <>
      <h1>Updating Objects in State</h1>

      <input
        type="text"
        placeholder="Update name"
        onChange={(event) => handleName(event.target.value)}
      />

      <br />
      <br />

      <input
        type="text"
        placeholder="Update city"
        onChange={(event) => handleCity(event.target.value)}
      />

      <h2>Name: {data.name}</h2>
      <h2>City: {data.address.city}</h2>
      <h2>Country: {data.address.country}</h2>
    </>
  );
}

export default App;