import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import propellerLogo from '/propeller.svg'

import './App.css'
import Home from './components/Home/Home'
import Apartment from './components/Apartment/Apartment'
import Cottage from './components/Cottage/Cottage'
import About from './components/About/About'

function App() {
  // const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <header>
        <Link to='/'><img src={propellerLogo} className="logo-propeller" alt="propeller logo" /></Link>
        <nav>
          <Link className="nav-link" to="/apartment">Apartments</Link>
          <Link className="nav-link" to="/cottage">Cottage</Link>
          <Link className="nav-link" to="/about">About Us</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apartment" element={<Apartment />}></Route>
        <Route path="/cottage" element={<Cottage />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
