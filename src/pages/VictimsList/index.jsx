import React, { useState } from 'react';
import { Button, AccusedCard } from '../../unit-components';
import Victims from './Victims';

function VictimsList() {
  const [activeSection, setActiveSection] = useState('victims');
  const [searchText, setSearchText] = useState('');

  const handleSearch = e => {
    e.preventDefault();
    console.log('searching...', searchText);
  };

  return (
    <div className="content">
      <div
        className="details-header bg-dark"
        style={{ paddingRight: '14px', paddingLeft: '14px' }}
      >
        <div
          className={`section ${
            activeSection === 'victims' ? 'active' : ''
          } bg-dark`}
          onClick={() => setActiveSection('victims')}
        >
          Victims
        </div>
        <div
          className={`section ${
            activeSection === 'accused' ? 'active' : ''
          } bg-dark`}
          onClick={() => setActiveSection('accused')}
        >
          Accused
        </div>
      </div>

      {activeSection === 'victims' ? (
        <Victims />
      ) : (
        <div
          style={{
            paddingRight: '14px',
            paddingLeft: '14px',
            paddingTop: '14px',
          }}
        >
          <div style={{ paddingTop: '14px' }}>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                name="search"
                value={searchText}
                placeholder="Search for a name"
                onChange={e => setSearchText(e.target.value)}
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
          <div style={{ paddingTop: '14px' }}>
            <h2 className="white">Tracking justice in Nigeria</h2>
          </div>
          <div style={{ paddingTop: '14px' }}>
            <Button width="170px" text="Submit a report" />
          </div>

          <div className="accused-card-container">
            <AccusedCard />
            <AccusedCard />
            <AccusedCard />
          </div>
        </div>
      )}
    </div>
  );
}

export default VictimsList;
