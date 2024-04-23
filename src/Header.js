import React from 'react';
import './App.css'; 

function Header() {
  return (
    <header className="header">
      <nav className="nav">
        <a href="#menu" className="nav-item">Menu</a>
        <div className="logo">L O G O</div>
        <div className="nav-items-right">
          <a href="#search" className="nav-item">Search</a>
          <a href="#wishlist" className="nav-item">Wishlist</a>
          <a href="#account" className="nav-item">Account</a>
          <a href="#cart" className="nav-item">Cart</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;
