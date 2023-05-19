import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="navbar__logo">Logo</div>
      <div className="navbar__links">
        <a href="#" className="navbar__link">Contact Us</a>
        <a href="#" className="navbar__link">About Us</a>
        <a href="#" className="navbar__link">Courses</a>
      </div>
      <div className="navbar__buttons">
        <button className="navbar__button">Login</button>
        <button className="navbar__button">Sign Up</button>
      </div> 
</nav>


    </div>
  )
}

export default Navbar
