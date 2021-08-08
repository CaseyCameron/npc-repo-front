import React from 'react';
import { Link } from 'react-router-dom';
import './NpcItem.css';

const NpcItem = ({ id, name, image, race, alignment, description }) => {
  return (
    <figure className="NpcItem">
      <Link to={`/npcs/${id}`}>
        <figcaption>
          <h2>{name}</h2>
          <img src={image} alt={name} />
          <p><span>Race:</span> {race}</p>
          <p><span>Alignment:</span> {alignment}</p>
          <span>Description:</span>
          <div>
            {description}
          </div>
        </figcaption>
      </Link>
    </figure>
  );
};

export default NpcItem;