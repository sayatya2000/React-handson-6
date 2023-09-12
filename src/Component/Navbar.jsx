import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
      <div className='nav'>
          <NavLink to='/home' className={'navlink'}>Home</NavLink>
          <NavLink to='student' className={'navlink'}>Student</NavLink>
          <NavLink to='contact' className={'navlink'}>Contact</NavLink>
    </div>
  )
}

export default Navbar