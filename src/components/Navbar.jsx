import React from "react";
import "../components/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">🎨 ArtSpace</div>
      <ul className="nav-links">
        <li><a href="#gallery">Gallery</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
