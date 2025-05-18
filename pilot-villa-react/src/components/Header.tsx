import { NavLink, useLocation } from 'react-router-dom'
import propellerLogo from '../assets/svg/propeller.svg'
import burgerBTN from '../assets/svg/burger-menu.svg'
import burgerCloseBTN from '../assets/svg/close.svg'
import {useEffect, useState } from "react"
import { ScreenType } from "../services/interface"

export default function Header( props: ScreenType ) {
  const [burgerMnuOn, setBurgerMnuOn] = useState(false)
  const currentPage = useLocation()

  useEffect(() => {
    if (currentPage.pathname !== '/' && props.screenType === "mobile") setBurgerMnuOn(prev => !prev)
  }, [currentPage, props.screenType])

  useEffect(() => {
    const lockScroll = document.querySelector('body')
    if (burgerMnuOn && lockScroll) {
      lockScroll.style.overflow = 'hidden'
    }
    else if (lockScroll) {
      lockScroll.style.overflow = 'unset'
    }
  }, [burgerMnuOn])
  
  useEffect(() => {
    if (currentPage.pathname !== '/' && props.screenType === "mobile") setBurgerMnuOn(prev => !prev)
  }, [currentPage, props.screenType])

  return (
    <header>
    <NavLink to='/' 
      onClick={() => burgerMnuOn && setBurgerMnuOn(false)}
      className={({isActive}) => isActive ? "logo-active" : ""}
      >
        <img src={propellerLogo} className="logo-propeller" alt="propeller logo" />
    </NavLink>
    
    <nav className='main-menu'>
      <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/apartment">Апартаменты</NavLink>
      <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/cottage">Коттеджи</NavLink>
      <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/service">Услуги</NavLink>
      <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/about">Контакты</NavLink>
    </nav>

    <div className="burger-btn-wrapper" onClick={() => setBurgerMnuOn(!burgerMnuOn)}>
        <img src={burgerMnuOn ? burgerCloseBTN : burgerBTN} className="burger-btn" alt="burger logo" />
    </div>

    <div className={`burger-menu-wrapper ${burgerMnuOn && 'burger-menu-drive-in'}`}>
        <nav className='burger-menu' onClick={() => setBurgerMnuOn(false)}>
          <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/apartment">Апартаменты</NavLink>
          <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/cottage">Коттеджи</NavLink>
          <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/service">Услуги</NavLink>
          <NavLink className={({isActive}) => isActive ? "nav-link link-active" : "nav-link"} to="/about">Контакты</NavLink>
        </nav>
    </div>

  </header>
  )
}