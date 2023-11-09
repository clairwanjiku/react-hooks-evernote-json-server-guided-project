
import React from 'react';

const AnimalCard = ({ animal, handleLike, handleDetails }) => {
  return (
    <div className="animal-card">
      <img src={animal.image} alt={animal.name} />
      <h3>{animal.name}</h3>
      <button onClick={() => handleLike(animal.id)}>Like</button>
      <button onClick={() => handleDetails(animal.id)}>Details</button>
    </div>
  );
};

export default AnimalCard;
