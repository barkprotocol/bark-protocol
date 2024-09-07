'use client';
import Link from 'next/link';
import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo flex items-center">
          <Link href="/">
            <img
              src="https://ucarecdn.com/dd264726-4f83-4a3a-b36b-bad0fb3f58a5/logolight.png"
              alt="BARK Protocol Logo"
              className="h-10"
            />
            <p className="text-2xl font-bold ml-2"></p>
          </Link>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`navbar-menu ${isMenuOpen ? 'active' : 'hidden'}`}>
          <Link href="/update">
            <p className="navbar-link">Update Subscription</p>
          </Link>
          <Link href="/send-email">
            <p className="navbar-link">Send Email</p>
          </Link>
          <Link href="/view-analytics">
            <p className="navbar-link">View Analytics</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
