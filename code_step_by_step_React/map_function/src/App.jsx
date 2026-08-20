import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const useData=["monika","yash","radha"];

  const useArr=[
  {
    name:"mon",
    age:22,
    email:'mon@gmail.com',
    id:1
  },
  {
    name:"yash",
    age:32,
    email:'hon@gmail.com',
    id:2
  },
  {
    name:"Radha",
    age:42,
    email:'radha@gmail.com',
    id:3
  }

]


  return (
    <>
      <h1>Loop in Jsx</h1>
      <table border="1">
        <thead>
          <tr >
            <td>Id</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
          </tr>
        </thead>

      <tbody>
        {
      useArr.map((user)=>(

        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.name}</td>
          <td>{user.age}</td>
          <td>{user.email}</td>
        </tr>
      ))
    }
      </tbody>
      </table>



      <br/><br/>





    </>
  )
}

export default App
