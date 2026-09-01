import { useEffect, useState } from "react";
import "./App.css";
import { use } from "react";
import { useNavigate } from "react-router-dom";

export default function UserList() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

   const url = "http://localhost:3000/users";

  useEffect(() => {
    setLoading(true);
    getUserData();
  }, []);

  const getUserData = async () => {
   

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    setUserData(data);
    setLoading(false);
  };

  const deleteUser=async(id)=>{
    let response=await fetch(url+"/"+id,{
        method:"delete"
    })
    response=await response.json();
    if(response){
        alert("Record deleted");
        getUserData();
    }
  }

  const navigate=useNavigate();
  const editUse=(id)=>{
    navigate("/edit/"+id)
  }

  return (
    <div>

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
              <li><button onClick={()=>deleteUser(user.id)}>Delete</button></li>
              <button onClick={() => editUse(user.id)}>Edit</button>
            </ul>
          ))}
        </>
      )}
    </div>
  );
}