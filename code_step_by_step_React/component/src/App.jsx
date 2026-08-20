import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Login, {Setting,Profile} from './Login'

function App() {

  return (
    <>
    <h1>Importing Compoenents</h1>
    <Login/>
    <Profile/>
    <Setting/>
    </>
  )
}

export default App
