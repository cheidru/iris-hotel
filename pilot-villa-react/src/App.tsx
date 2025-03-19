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
import {useEffect, useState} from "react"

function App() {
  // const [count, setCount] = useState(0)
  const [winWidth, setWinWidth] = useState(getWinWidth())

  function getWinWidth() {
    return window.innerWidth
  }

  useEffect(() => {
    function handleWinResize() {
      setWinWidth(getWinWidth())
    }

    window.addEventListener('resize', handleWinResize)

    return () => window.removeEventListener('resize', handleWinResize)
  }, [])

  const screen = winWidth < 700 ? "mobile" : "wide"

  return (
    <BrowserRouter>
      <header>
        <Link to='/'><img src={propellerLogo} className="logo-propeller" alt="propeller logo" /></Link>
        <nav>
          <Link className="nav-link" to="/apartment">Апартаменты</Link>
          <Link className="nav-link" to="/cottage">Коттеджи</Link>
          <Link className="nav-link" to="/about">О нас</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apartment" element={<Apartment screenType={screen} />}></Route>
        <Route path="/cottage" element={<Cottage screenType={screen} />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
