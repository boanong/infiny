import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
     <nav className="navbar">
  <a className="navbar__logo" href="#">camsol</a>
  <ul className="navbar__links">
    <li className="navbar__link"><a href="#">About</a></li>
    <li className="navbar__link navbar__dropdown">
      <a href="#">Our Process</a>
      <div className="navbar__dropdown-content">
        <h3>Step 1</h3>
        <p>Explanation of Step 1</p>
        <h3>Step 2</h3>
        <p>Explanation of Step 2</p>
        <h3>Step 3</h3>
        <p>Explanation of Step 3</p>
      </div>
    </li>
    <li className="navbar__link navbar__dropdown">
      <a href="#">Company</a>
      <div className="navbar__dropdown-content">
        <h3>About Us</h3>
        <p>Explanation of About Us</p>
        <h3>Our Mission</h3>
        <p>Explanation of Our Mission</p>
        <h3>Our Values</h3>
        <p>Explanation of Our Values</p>
      </div>
    </li>
    <li className="navbar__link navbar__dropdown">
      <a href="#">Team</a>
      <div className="navbar__dropdown-content">
        <h3>Leadership</h3>
        <p>Explanation of Leadership</p>
        <h3>Engineering</h3>
        <p>Explanation of Engineering</p>
        <h3>Design</h3>
        <p>Explanation of Design</p>
      </div>
    </li>
    <li className="navbar__link navbar__dropdown">
      <a href="#">Projects</a>
      <div className="navbar__dropdown-content">
        <h3>Project 1</h3>
        <p>Explanation of Project 1</p>
        <h3>Project 2</h3>
        <p>Explanation of Project 2</p>
        <h3>Project 3</h3>
        <p>Explanation of Project 3</p>
      </div>
    </li>
    <li className="navbar__link"><a href="#">Magazine</a></li>
  </ul>
  <button className="navbar__button">Book Consultant</button>
</nav>


    </div>
  )
}

export default Navbar
