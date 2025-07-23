// src/components/ArtworkCard.jsx
import React from "react";
import "../components/ArtworkCard.css";

const ArtworkCard = ({ art }) => {
  return (
    <div className="artwork-card">
      <img src={art.image} alt={art.title} className="artwork-image" />
      <div className="artwork-info">
        <h3>{art.title}</h3>
        <p>{art.artist}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
