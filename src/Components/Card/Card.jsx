import React from 'react';
import './Card.css';

const Card = ({ title, image, techStack, githubLink, liveLink }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{techStack}</p>
        <div className="card-buttons">
          <a href={githubLink} target="_blank" rel="noopener noreferrer" className="btn">Github</a>
          {liveLink && (
            <a href={liveLink} target="_blank" rel="noopener noreferrer" className="btn visit">View Video</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
