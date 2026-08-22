// import { useState } from "react";

// function App() {

//   const [data, setData] = useState([
//     "anil",
//     "sam",
//     "peter",
//     "tony"
//   ]);

//   const handleUser = (name) => {

//     data[data.length - 1] = name;

//     setData([...data]);

//   };

//   return (
//     <div>

//       <h1>Updating Array in State</h1>

//       <input
//         type="text"
//         placeholder="enter last user name"
//         onChange={(e) => handleUser(e.target.value)}
//       />

//       {
//         data.map((item,index)=>(
//           <h3  key={index}>{item}</h3>
//         ))
//       }

//     </div>
//   );
// }

// export default App;



import { useState } from "react";

function App() {
  const [users, setUsers] = useState([
    { name: "Monika", age: 22 },
    { name: "Rahul", age: 25 },
    { name: "Priya", age: 21 }
  ]);

  const [age, setAge] = useState("");

  const changeAge = () => {
    users[users.length - 1].age = age;
    setUsers([...users]);
  };

  return (
    <>
      {users.map((user, index) => (
        <p key={index}>
          {user.name} - {user.age}
        </p>
      ))}

      <input
        type="text"
        placeholder="Enter last user age"
        onChange={(e) => setAge(e.target.value)}
      />

      <button onClick={changeAge}>
        Change last Age
      </button>
    </>
  );
}

export default App;