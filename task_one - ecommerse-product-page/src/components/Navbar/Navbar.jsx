// Navbar.js
import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import burgerIcon from '../../assets/icon-menu.svg'; // Update the path accordingly
import cartIcon from '../../assets/icon-cart.svg'; // Update the path accordingly
import profileIcon from '../../assets/image-avatar.png'; // Update the path accordingly
import closeIcon from '../../assets/icon-close.svg'
import Cart from '../Cart/Cart'
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <div className="navbar">
      <div className='left-nav'>
        <div className="logo">
            <h1>Sneakers</h1>
        </div>
        <div className="burger" onClick={toggleNav}>
            <img src={burgerIcon} alt="Burger Icon" />
        </div>
        <nav className={`nav-links ${showNav ? 'active' : ''}`}>
            <img onClick={toggleNav} src={closeIcon} alt="close icon" />
            <a href="#" className="active">
            Collection
            </a>
            <a href="#">Men</a>
            <a href="#">Women</a>
            <a href="#">About</a>
            <a href="#">Contact</a>
        </nav>
      </div>
      <div className="cart-profile">
        <img src={cartIcon} onClick={toggleCart} alt="Cart Icon" />
        <img src={profileIcon} alt="Profile Icon" className="profile-img" />
        {showCart ? <Cart /> : null}
      </div>
    </div>
  );
};

export default Navbar;
