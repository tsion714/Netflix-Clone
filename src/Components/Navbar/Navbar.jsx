import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import Profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../Firebase'
import '@fortawesome/fontawesome-free/css/all.min.css';




const Navbar = () => {

  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener('scroll', ()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add('nav-dark')
      }
      else{ 
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])

  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
        <img src={logo} alt="" />
        <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
        </ul>
        </div>
        <div className="navbar-right">
          <div className='icons'>
        <i className="fas fa-search"></i>
        </div>
            <p>Children</p>
            <div className='icons'>
            <i className="fas fa-bell"></i>
            </div>
            <div className="navbar-profile">
            <img src={Profile_img} alt="" className='profile'/>
            <div className='icons'>
            <i className="fa-solid fa-caret-down"></i>
            </div>
            <div className='dropdown'>
                <p onClick={() => {logout()}}>Sign Out of Netflix</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
