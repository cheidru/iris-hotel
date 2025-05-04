import { Routes, Route } from 'react-router-dom'

import './App.css'
import Layout from './components/Layout'
import Home from './pages/Home'
import Apartment from './pages/Apartment'
import Cottage from './pages/Cottage'
import Service from './pages/Service'
import About from './pages/About'
import {useEffect, useState } from "react"

function App() {
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
      <Routes>
        <Route path="/" element={<Layout screenType={screen} />}>
          <Route index element={<Home />} />
          <Route path="/apartment" element={<Apartment screenType={screen} />} />
          <Route path="/cottage" element={<Cottage screenType={screen} />} />
          <Route path="/service" element={<Service />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
  )
}

export default App
