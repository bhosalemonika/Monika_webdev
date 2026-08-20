import {useState} from "react"

const User=({user})=>{
    
  return (
    <div style={{
      border:"1px solid green",
      padding:"10px",
      margin:"10px",
      width:"400px",
      borderRadius:"10px"
    }}>

        <h1>User Record</h1>
     <h3>ID: <span style={{color:'green'}}>{user.id}</span></h3>
      <h3>Name: <span style={{color:'green'}}>{user.name}</span></h3>
       <h3>Age: <span style={{color:'green'}}>{user.age}</span></h3>
        <h3>Email: <span style={{color:'green'}}>{user.email}</span></h3>
    
     
    </div>
  )
}

export default User;