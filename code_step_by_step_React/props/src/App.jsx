import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import User from "./User"
import Card from "./Card"

function App() {

  return (
    <>
     {/* <User name="Monika"/>
     <User /> */}
      {/* <Card
        title="Coffee"
        content={<p>Fresh Cappuccino</p>}
      /> */}

        <Card>
        <h2>Cappuccino</h2>
        <p>₹150</p>
      </Card>

      <Card>
        <h2>Espresso</h2>
        <p>₹100</p>
      </Card>
          <Card>
        <h2>Cappuccino</h2>
        <p>₹150</p>
      </Card>

      <Card>
        <h2>Espresso</h2>
        <p>₹100</p>
      </Card>


      <User name="MOnika" color="red"/>
      <User name="Yash" color="blue"/>
      <User name="Pranali" color="pink"/>




    </>
  )
}

export default App
