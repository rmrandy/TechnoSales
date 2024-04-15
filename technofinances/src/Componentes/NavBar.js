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
            <Link to="/EstadoResultados" className="nav-links">Estado de Resultados</Link>
          </li>
          <li className="nav-item">
            <Link to="/BalanceGeneral" className="nav-links">Balance General</Link>
          </li>
          <li className="nav-item">
            <Link to="/Transacciones" className="nav-links">Gestion de Deudas</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
