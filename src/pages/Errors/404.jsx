import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <Fragment>
      <div className="d-flex justify-content-center text-content">
        <div>
          <h1 className="hero-text text-center">Ooops</h1>
          <p className="text-medium text-center">
            Just like Impossibilities, this page does not exist.
          </p>
          <Link to="/">Go Back Home</Link>
        </div>
      </div>
    </Fragment>
  );
};

export default NotFound;
