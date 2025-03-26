import { Routes, Route, Link, useLocation } from 'react-router-dom'
import propellerLogo from './assets/svg/propeller.svg'
import burgerBTN from './assets/svg/burger-menu.svg'
import burgerCloseBTN from './assets/svg/close.svg'

import './App.css'
import Home from './components/Home/Home'
import Apartment from './components/Apartment/Apartment'
import Cottage from './components/Cottage/Cottage'
import About from './components/About/About'
import {useEffect, useState } from "react"

function App() {
  const [winWidth, setWinWidth] = useState(getWinWidth())
  const [burgerMnuOn, setburgerMnuOn] = useState(false)
  const currentPage = useLocation()

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

  useEffect(() => {
    if (currentPage.pathname !== '/' && screen === "mobile") setburgerMnuOn(prev => !prev)
  }, [currentPage])

  const screen = winWidth < 700 ? "mobile" : "wide"

  return (
    <>
      <header>
        <Link to='/' onClick={() => burgerMnuOn && setburgerMnuOn(false)}><img src={propellerLogo} className="logo-propeller" alt="propeller logo" /></Link>
        
        <nav className='main-menu'>
          <Link className="nav-link" to="/apartment">Апартаменты</Link>
          <Link className="nav-link" to="/cottage">Коттеджи</Link>
          <Link className="nav-link" to="/about">О нас</Link>
        </nav>

        <div className="burger-btn-wrapper" onClick={() => setburgerMnuOn(!burgerMnuOn)}>
            <img src={burgerMnuOn ? burgerCloseBTN : burgerBTN} className="burger-btn" alt="burger logo" />
        </div>

        <div className={`burger-menu-wrapper ${burgerMnuOn && 'burger-menu-drive-in'}`}>
            <nav className='burger-menu'>
              <Link className="nav-link" to="/apartment">Апартаменты</Link>
              <Link className="nav-link" to="/cottage">Коттеджи</Link>
              <Link className="nav-link" to="/about">О нас</Link>
            </nav>
        </div>

      </header>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/apartment" element={<Apartment screenType={screen} />}></Route>
        <Route path="/cottage" element={<Cottage screenType={screen} />}></Route>
        <Route path="/about" element={<About />}></Route>
      </Routes>
    </>
  )
}

export default App
