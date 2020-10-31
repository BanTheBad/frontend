import React from 'react';

/**
 *
 * @param {{imageURL: string, caseURL: string, name: string, rank: string, postingState: string, offence: string}} props
 */
function AccusedCard(props) {
  const {
    imageURL = 'https://via.placeholder.com/400?text=Accused+Photo',
    caseURL = '/cases/12345',
    name = 'Mohammed Adamu',
    rank = 'Inspector General of Police',
    postingState = 'FCT',
    offence = 'Crimes against humanity',
  } = props;
  return (
    <div className="accused-card">
      <div className="accused-image-container">
        <img src={imageURL} alt="Accused" width="100%" />
      </div>
      <div className="accused-details-container">
        <h3 className="accused-name white">{name.toUpperCase()}</h3>
        <h4 className="accused-rank">
          {rank.toUpperCase()}, {postingState.toUpperCase()}
        </h4>
        <h4 className="accused-offence-header">CHARGE</h4>
        <p className="accused-offence">{offence}</p>
        <div className="accused-case-link">
          <a href={caseURL}>View details</a>
        </div>
      </div>
    </div>
  );
}

export default AccusedCard;
