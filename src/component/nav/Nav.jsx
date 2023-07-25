import React from 'react'
import { NavLink } from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (
    <nav>
      <div className='all-nav-link'>
       <NavLink to={'/'}></NavLink>
      </div>
    </nav>
  )
}

export default Nav
