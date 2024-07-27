import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
    <div className="home_navbar">
    <ul>
   <li><a href="App.jsx">Home</a></li>
   <li><a href="Locations.jsx">Locations</a></li>
   <li><a href="#">Services</a></li>
   <li><a href="#">Tasks</a></li>
   <li><a href="#">Teams</a></li>
</ul>
</div>

      <h1 className="home_title1">P99Soft</h1>
      <button id="login-btn">Login</button>
      <button id="signup-btn">Sign up</button>
    </>
  )
}

export default App
