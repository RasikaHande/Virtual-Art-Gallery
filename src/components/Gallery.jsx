// src/components/Gallery.jsx
import React, { useState } from "react";
import "../components/Gallery.css";
import { artworks } from "../data/artworks";
import ArtworkCard from "./ArtworkCard";
import PopupModal from "./PopupModal";

const Gallery = () => {
  const [selectedArt, setSelectedArt] = useState(null);

  const openModal = (art) => {
    setSelectedArt(art);
  };

  const closeModal = () => {
    setSelectedArt(null);
  };

  return (
    <section id="gallery" className="gallery-section">
      <h2 className="gallery-title">Modern Art Collection</h2>
      <div className="gallery-grid">
        {artworks.map((art) => (
          <div key={art.id} onClick={() => openModal(art)}>
            <ArtworkCard art={art} />
          </div>
        ))}
      </div>

      {/* Show popup modal only if selected */}
      <PopupModal selectedArt={selectedArt} onClose={closeModal} />
    </section>
  );
};

export default Gallery;
