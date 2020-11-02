import React, { useState } from 'react';
import { Button } from '../../unit-components';

/**
 *
 * @param {{mode: string}} props
 */
function TopNav(props) {
  const { withLinks } = props;
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const toggleNavCollapse = e => {
    e.preventDefault();
    setIsNavCollapsed(!isNavCollapsed);
  };
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  if (!withLinks) {
    return (
      <div className={`topnav ${!isNavCollapsed ? 'responsive' : ''}`}>
        <a href="/">
          <div className="navbrand">
            <span>Ban</span>
            <span>The BAD</span>
          </div>
        </a>
      </div>
    );
  } else {
    return (
      <div className={`topnav ${!isNavCollapsed ? 'responsive' : ''}`}>
        <a href="/">
          <div className="navbrand">
            <span>Ban</span>
            <span>The BAD</span>
          </div>
        </a>
        <a href="/" className={isDropdownOpen ? 'not-cases-link' : ''}>
          Home
        </a>
        <div className="dropdown">
          <button
            className="dropbtn"
            onClick={() => setIsDropdownOpen(isDropdownOpen => !isDropdownOpen)}
          >
            Cases
            {isDropdownOpen ? (
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
                className="feather feather-minus"
                style={{ position: 'relative', top: '5px', left: '8px' }}
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            ) : (
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
                className="feather feather-plus"
                style={{ position: 'relative', top: '5px', left: '8px' }}
              >
                <line x1="12" y1="5" x2="12" y2="19"></line>
                <line x1="5" y1="12" x2="19" y2="12"></line>
              </svg>
            )}
          </button>
          <div
            className="dropdown-content"
            style={{ display: isDropdownOpen ? 'block' : 'none' }}
          >
            <a href="/cases/open">Open Cases</a>
            <a href="/cases/closed">Closed Cases</a>
          </div>
        </div>
        <a href="/victims" className={isDropdownOpen ? 'not-cases-link' : ''}>
          Victims
        </a>
        <a href="/criminals" className={isDropdownOpen ? 'not-cases-link' : ''}>
          Criminals
        </a>
        <a href="/contact" className={isDropdownOpen ? 'not-cases-link' : ''}>
          Contact Us
        </a>
        <hr
          className="nav-divider"
          style={{ display: !isNavCollapsed ? 'block' : 'none' }}
        />
        <a href="/login" className={isDropdownOpen ? 'not-cases-link' : ''}>
          Login
        </a>

        <a className="icon">
          {!isNavCollapsed ? (
            <div style={{ display: 'flex' }}>
              <span
                style={{ marginRight: '8px', fontSize: '16px' }}
                onClick={toggleNavCollapse}
              >
                Close
              </span>
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
                className="feather feather-x-circle"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="15" y1="9" x2="9" y2="15"></line>
                <line x1="9" y1="9" x2="15" y2="15"></line>
              </svg>
            </div>
          ) : (
            <Button text="Menu" size="small" onClick={toggleNavCollapse} />
          )}
        </a>
      </div>
    );
  }
}

export default TopNav;
