import React from 'react'
import navProfile from '../../assets/profile.png'
import './Navbar.css'
function Navbar() {
  return (
    
  <div className='navbar'>
      <h1 className='nav-logo'>Admin</h1>
      <img className='nav-profile' src={navProfile}  alt=""  width={"50px"} height={"50px"} />
    </div>
  )
  
}

export default Navbar