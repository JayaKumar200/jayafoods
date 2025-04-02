import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import food from "../assets/instamat.png";
import "./Navbar.css";

const Navbar = ({ cartItems = [], homeCount }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  // Handle screen resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
      if (window.innerWidth > 480) setMenuOpen(false); // Close menu on large screens
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="header">
        <Link to="/" className="logo-container">
          <img src={food} alt="JK Instamat Logo" className="logo" />
          {!isMobile && <h3>JK Instamat</h3>}
        </Link>

        {/* 3-dot menu icon (only for small screens) */}
        {isMobile ? (
          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            &#x22EE;
          </div>
        ) : (
          <nav className="nav-links">
            <Link to='/' className='menu-item' >Home</Link>
            <Link to="/offers" className="menu-item">Offers</Link>
            <Link to="/signin" className="menu-item">Sign In</Link>
            <Link to="/cart" className="menu-item cart-section">Cart ({cartItems.length + homeCount})</Link>
            <Link to="/admin" className="menu-item">Admin</Link>
          </nav>
        )}
      </header>

      {/* Mobile Full-Screen Menu */}
      {menuOpen && isMobile && (
        <div className="menu-overlay">
          <nav className="nav-links">
            <Link to="/" className="menu-item" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/offers" className="menu-item" onClick={() => setMenuOpen(false)}>Offers</Link>
            <Link to="/signin" className="menu-item" onClick={() => setMenuOpen(false)}>Sign In</Link>
            <Link to="/cart" className="menu-item cart-section" onClick={() => setMenuOpen(false)}>Cart ({cartItems.length + homeCount})</Link>
            <Link to="/admin" className="menu-item" onClick={() => setMenuOpen(false)}>Admin</Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Navbar;
