// src/App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Gallery from "./components/Gallery";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer"; // Added footer

function App() {
  return (
    <>
      <Navbar />
      <Gallery />
      <About />
      <Contact />
      <Footer /> {/* Final footer at bottom */}
    </>
  );
}

export default App;
