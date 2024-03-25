import React from 'react';
import { Link } from 'react-router-dom';
import Logo from "./LOGO.png"
import "./NavBar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="Company Logo" className="navbar-logo-img"/>
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <Link to="/" className="nav-links">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/servicios" className="nav-links">Servicios</Link>
          </li>
          <li className="nav-item">
            <Link to="/acerca-de" className="nav-links">Acerca de</Link>
          </li>
          <li className="nav-item">
            <Link to="/contacto" className="nav-links">Contacto</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
