import React from 'react';

/**
 *
 * @param {{name: string, location: Object, status: string, imageURL: string, victimStoryURL: string, useCase: string}} props
 */
function VictimCard(props) {
  const {
    useCase,
    name = 'John Doe',
    location = { state: 'Lagos', city: 'Ikeja' },
    status = 'Murdered',
    imageURL = 'https://via.placeholder.com/150',
    victimStoryURL = 'http://locahost:3001',
  } = props;

  return (
    <div className="victim-card">
      <img src={imageURL} width="64px" height="64px" alt="Victim" />
      <div className="victim-data">
        <span className="victim-name">{name}</span>
        <span className="victim-location">
          {location.state}, {location.city}
        </span>
        <span className="victim-status">{status}</span>
      </div>
      <div
        className="victim-story-link-container"
        style={{ display: useCase === 'cases' ? 'none' : 'block' }}
      >
        <a href={victimStoryURL} className="victim-story-link">
          View story
        </a>
      </div>
    </div>
  );
}

export default VictimCard;
