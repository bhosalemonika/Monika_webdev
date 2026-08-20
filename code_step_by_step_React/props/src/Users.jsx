import {useState} from "react"
function User({ name = "Guest" }) {
  return <h2>Hello {name}</h2>;
}

export default User;