// src/components/PopupModal.jsx
import React from "react";
import "../components/PopupModal.css";

const PopupModal = ({ selectedArt, onClose }) => {
  if (!selectedArt) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>
        <img src={selectedArt.image} alt={selectedArt.title} className="modal-image" />
        <div className="modal-details">
          <h2>{selectedArt.title}</h2>
          <h4>By {selectedArt.artist}</h4>
          <p>{selectedArt.description}</p>
        </div>
      </div>
    </div>
  );
};

export default PopupModal;
