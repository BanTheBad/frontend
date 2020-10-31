import React, { useEffect, useState } from 'react';
import { AccusedCard } from '../../unit-components';

function Cases() {
  const [cases, setCases] = useState([]);

  const [searchText, setSearchText] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    console.log('searching...', searchText);
  };

  useEffect(() => {
    // Get cases
    setCases([
      {
        id: '12345',
        imageURL: 'https://via.placeholder.com/400?text=Accused+Photo',
        name: 'Mohammed Adamu',
        rank: 'Inspector General of Police',
        postingState: 'FCT',
        offence: 'Crimes against humanity',
      },
      {
        id: '67890',
        imageURL: 'https://via.placeholder.com/400?text=Accused+Photo',
        name: 'James Nwafor',
        rank: 'CSP',
        postingState: 'Anambra State',
        offence: 'Serial Murder',
      },
    ]);
  }, []);

  return (
    <div className="content">
      <div className="section-container" style={{ paddingTop: '14px' }}>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            name="search"
            value={searchText}
            placeholder="Search for a name"
            onChange={e => setSearchText(e.target.value)}
            style={{ fontWeight: 'normal' }}
          />
          <span className="icon input-password" onClick={handleSearch}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-search"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </span>
        </form>
      </div>
      <div className="section-container" style={{ paddingTop: '14px' }}>
        <h2 className="white">Tracking justice in Nigeria</h2>
      </div>
      <div className="section-container">
        {cases.map(_case => (
          <AccusedCard
            key={_case.id}
            caseURL={`/cases/${_case.id}`}
            imageURL={_case.imageURL}
            name={_case.name}
            rank={_case.rank}
            postingState={_case.postingState}
            offence={_case.offence}
          />
        ))}
      </div>
    </div>
  );
}

export default Cases;
