// src/components/Footer.jsx
import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} ArtSpace by Rasika Hande. All rights reserved.</p>
      <div className="footer-links">
        <a href="https://github.com/rasikahande" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://www.linkedin.com/in/rasika-hande " target="_blank" rel="noreferrer">LinkedIn</a>
        <a href="#gallery">Gallery</a>
      </div>
    </footer>
  );
};

export default Footer;
