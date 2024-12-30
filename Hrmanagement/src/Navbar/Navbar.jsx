import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import eagle from '../Images/eagle.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    setIsLoggedIn(authStatus === 'true');
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsLoggedIn(false);
    alert('You have been logged out.');
    window.location.href = '/';
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src={eagle} alt="Logo" className="logo" />
        CodeSignal
      </div>
      <button className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </button>
      <ul className={`navbar-links ${isOpen ? 'open' : ''}`}>
        <li><NavLink to="/" activeClassName="active-link" exact>Home</NavLink></li>
        <li><NavLink to="/EmployeeManagement" activeClassName="active-link">EmployeeManagement</NavLink></li>
        <li><NavLink to="/Products" activeClassName="active-link">Products</NavLink></li>
        <li><NavLink to="/resources" activeClassName="active-link">Resources</NavLink></li>
        <li><NavLink to="/company" activeClassName="active-link">Company</NavLink></li>
        {isLoggedIn ? (
          <li><button onClick={handleLogout} className="logout-button">Logout</button></li>
        ) : (
          <li><NavLink to="/login" activeClassName="active-link">Log In</NavLink></li>
        )}
      </ul>
      <button className="button">Get Started</button>
    </nav>
  );
};

export default Navbar;
