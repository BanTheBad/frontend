import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';

import { InputEmail, InputPassword, Button } from '../../unit-components';

// eslint-disable-next-line no-useless-escape
const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// eslint-disable-next-line no-useless-escape
const passwordRegEx = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    if (emailRegEx.test(email) && passwordRegEx.test(password)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [email, password]);

  const handleBlur = type => {
    if (type === 'email') {
      if (!emailRegEx.test(email)) {
        setEmailError('Invalid email Address');
      } else {
        setEmailError(null);
      }
    }

    if (type === 'password') {
      if (!passwordRegEx.test(password)) {
        setPasswordError(
          'Password should be atleast 8 characters long consisting of upper and lower case letters',
        );
      } else {
        setPasswordError(null);
      }
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (!emailRegEx.test(email)) {
      return setEmailError('Invalid email Address');
    }

    if (!passwordRegEx.test(password)) {
      return setPasswordError(
        'Password should be atleast 8 characters long consisting of upper and lower case letters',
      );
    }

    if (emailRegEx.test(email) && passwordRegEx.test(password)) {
      return alert('logged in');
    }
  };

  return (
    <div className="content">
      <div className="section-container admin-login">
        <h1 className="page-title">Admin Login</h1>
      </div>
      <div className="section-container admin-login">
        <form className="form" onSubmit={e => handleSubmit(e)}>
          <div className="form-group">
            <InputEmail
              label="Email"
              value={email}
              onChange={({ target: { value } }) =>
                setEmail(value.toLowerCase())
              }
              onBlur={() => handleBlur('email')}
              className="form-control"
            />
            {emailError && (
              <small className="error-container">Invalid Email Adress</small>
            )}
          </div>
          <div className="form-group">
            <InputPassword
              label="Password"
              value={password}
              onChange={({ target: { value } }) => setPassword(value)}
              className="form-control"
              onBlur={() => handleBlur('password')}
            />
            {passwordError && (
              <small className="error-container">
                Password should be atleast 8 characters long consisting of upper
                and lower case letters
              </small>
            )}
          </div>

          <div className="btn-container">
            <Button type="submit" text="Login" disabled={disabled} />
          </div>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = () => ({});

export default connect(mapStateToProps, {})(AdminLogin);
