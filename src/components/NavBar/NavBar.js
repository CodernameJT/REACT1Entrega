// src/components/NavBar/NavBar.js
import React from 'react';
import logo from '../../../src/logo192.png';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="My Logo" className="logo-image" />
      </div>
      <ul>
        <li>Home</li>
        <li>Productos</li>
        <li>Contacto</li>
      </ul>
      <CartWidget />
    </nav>
  );
};

export default NavBar;
