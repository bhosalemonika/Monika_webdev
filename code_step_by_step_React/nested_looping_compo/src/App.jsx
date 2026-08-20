import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import College from "./College"

function App() {
 const collegeData=[
  {
    name:"MIT",
    city:"Pune",
    student:[
      {
        name:"monika bhosale",
        age:'22',
        email:"m@gmail.com"
      },
       {
        name:"Radha kawade",
        age:'42',
        email:"radha@gmail.com"
      },
       {
        name:"Punam Khed",
        age:'12',
        email:"punam@gmail.com"
      },

    ]
  },
   {
    name:"Zeal Pune",
    city:"Nashik",
    student:[
      {
        name:"monika bhosale",
        age:'22',
        email:"m@gmail.com"
      },
       {
        name:"Radha kawade",
        age:'42',
        email:"radha@gmail.com"
      },
       {
        name:"Punam Khed",
        age:'12',
        email:"punam@gmail.com"
      },

    ]
  },
   {
    name:"IIT",
    city:"Alwar",
    student:[
      {
        name:"monika bhosale",
        age:'22',
        email:"m@gmail.com"
      },
       {
        name:"Pranali ",
        age:'42',
        email:"radha@gmail.com"
      },
       {
        name:"Punam Khed",
        age:'12',
        email:"punam@gmail.com"
      },

    ]
  }
 ]

  return (
    <>
    <h1>Nested Looping </h1>
    {
      collegeData.map((college,index)=>{
        return(
        <div key={index}>
          <College college={college}/>
        </div>
        )
      })
    }
    </>
  )
}

export default App
