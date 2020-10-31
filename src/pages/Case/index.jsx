import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { VictimCard } from '../../unit-components';

function Case() {
  const { caseId } = useParams();

  const [caseDetail, setCaseDetail] = useState(null);
  const [showCaseStory, setShowCaseStory] = useState(false);

  useEffect(() => {
    // Get case
    const caseFound = cases.find(_case => _case.id === caseId);
    setCaseDetail(caseFound);
  }, [caseId]);

  if (!caseDetail) {
    return (
      <div className="content">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <div className="content">
      <div className="case-accused-container">
        <div className="">
          <h3 className="accused-name white">
            {caseDetail.name.toUpperCase()}
          </h3>
          <h4 className="accused-rank">
            {caseDetail.rank.toUpperCase()},{' '}
            {caseDetail.postingState.toUpperCase()}
          </h4>
          <h4 className="accused-offence-header">CHARGE</h4>
          <p className="accused-offence">{caseDetail.offence}</p>
        </div>

        <div className="case-accused-image-container">
          <img src={caseDetail.imageURL} alt="Accused" width="100%" />
        </div>

        <div className="case-update-action">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-edit"
            style={{ position: 'relative', top: '1.5', marginRight: '8px' }}
          >
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
          </svg>
          Update Details
        </div>
      </div>
      <div className="case-details">
        <div className="case-details-view-action-container">
          <div
            className="case-details-share-icons"
            style={{ display: showCaseStory ? 'block' : 'none' }}
          >
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
              className="feather feather-facebook"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
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
              className="feather feather-twitter"
            >
              <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
            </svg>
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
              className="feather feather-instagram"
            >
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </div>
          <div className="case-details-view-action">
            <p
              onClick={() => setShowCaseStory(showCaseStory => !showCaseStory)}
            >
              {showCaseStory ? 'Hide Details' : 'View Details'}
            </p>
          </div>
        </div>

        <div
          className="case-detail-story"
          style={{ display: showCaseStory ? 'block' : 'none' }}
        >
          <p>{caseDetail.story}</p>
          <hr />
        </div>

        <div className="case-detail-data">
          <div className="case-data">
            <div className="case-data-title">
              <p>LEGAL STATUS</p>
            </div>
            <div className="case-data-text">
              <p>In Court</p>
            </div>
          </div>
          <hr />
          <div className="case-data">
            <div className="case-data-title">
              <p>STATUS OF CASE</p>
            </div>
            <div className="case-data-text">
              <p style={{ color: '#F9DECA' }}>On Trial</p>
            </div>
          </div>
          <hr />
          <div className="case-data">
            <div className="case-data-title">
              <p>DATE OF CASE FILING</p>
            </div>
            <div className="case-data-text">
              <p>18th October, 2020</p>
            </div>
          </div>
          <hr />
          <div className="case-data">
            <div className="case-data-title">
              <p>COURT LOCATION</p>
            </div>
            <div className="case-data-text">
              <p>Lagos High Court</p>
            </div>
          </div>
          <hr />
          <div className="case-data">
            <div className="case-data-title">
              <p>STAGE OF TRIAL</p>
            </div>
            <div className="case-data-text">
              <p style={{ color: '#F9DECA' }}>Prosecution Stage</p>
            </div>
          </div>
          <hr />
          <div className="case-data">
            <div className="case-data-title">
              <p>NEXT COURT SITTING</p>
            </div>
            <div className="case-data-text">
              <p>20th October, 2020</p>
            </div>
          </div>
        </div>

        <div className="case-detail-story">
          <p style={{ fontSize: '12px', fontWeight: 'bold', color: '#F9DECA' }}>
            Case Details
          </p>
          <p>{caseDetail.story}</p>
        </div>

        <div className="case-victims">
          <p>Victims</p>
          <div className="list">
            <VictimCard useCase="cases" />
          </div>
          <div className="list">
            <VictimCard useCase="cases" />
          </div>
          <div className="list">
            <VictimCard useCase="cases" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Case;

const cases = [
  {
    id: '12345',
    imageURL: 'https://via.placeholder.com/400?text=Accused+Photo',
    name: 'Mohammed Adamu',
    rank: 'Inspector General of Police',
    postingState: 'FCT',
    offence: 'Crimes against humanity',
    story:
      'As I surged on, one of the police officers opened the vehicle door and started firing rapidly in the air. That pretty well saved me and some of those people. From the Area command Onitsha, we headed to Awkuzu Sars with Csp James Nwafor and his team. Dr. Justin Nwankwo and the staff were packed in one vehicle while myself, Csp James Nwafor and three other Sars officers were in another vehicle.',
  },
  {
    id: '67890',
    imageURL: 'https://via.placeholder.com/400?text=Accused+Photo',
    name: 'James Nwafor',
    rank: 'CSP',
    postingState: 'Anambra State',
    offence: 'Serial Murder',
    story:
      'As I surged on, one of the police officers opened the vehicle door and started firing rapidly in the air. That pretty well saved me and some of those people. From the Area command Onitsha, we headed to Awkuzu Sars with Csp James Nwafor and his team. Dr. Justin Nwankwo and the staff were packed in one vehicle while myself, Csp James Nwafor and three other Sars officers were in another vehicle.',
  },
];
