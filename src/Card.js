import React from 'react';
import './App.css';

function Card({ img, name, price, isSold }) {
  return (
    <div className="card">
      {isSold && <div className="badge">Sold Out</div>} {/* Conditional rendering for "Sold Out" badge */}
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  );
}

export default Card;
