import React from 'react';
import { useState, useEffect } from 'react';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState('');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [validPassword, setvalidPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [validData, setvalidData] = useState(false);
  const [createClicked, setCreateClicked] = useState(false);

  function vaildateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function handleContinueButtonClick() {
    if (validEmail) {
      setShowAdditionalInfo(true);
    } else {
      setShowAdditionalInfo(false);
    }
  }
  //function that handles the input change of email
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setValidEmail(vaildateEmail(newEmail));
  }

  function handleConfirmEmailChange(event) {
    const newEmail = event.target.value;
    setConfirmEmail(newEmail);
  }

  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setvalidPassword(event.target.value.length >= 6);
  }

  function validateAll() {
    if (email !== confirmEmail) {
      setvalidData(false);
    } else if (firstName.length === 0) {
      setvalidData(false);
    } else if (lastName.length === 0) {
      setvalidData(false);
    } else if (!validPassword) {
      setvalidData(false);
    } else {
      setvalidData(true);
    }
  }

  function handleCreateClick() {
    setCreateClicked(true);
    validateAll();
  }

  function submitForm(event) {
    event.preventDefault();
    if (validData) {
      console.log({
        email,
        confirmEmail,
        firstName,
        lastName,
        password,
      });
    }
  }
  return (
    <div className="create-account-main">
      <div className="split-container-primary">
        <div className="split-container-content">
          <div className="header-create-element">
            <h1>Ticketwave</h1>
            <h1>Create an account</h1>
          </div>
          <form onSubmit={submitForm}>
            <div id="create-account">
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                //required
              />
              <button id="continue-button" onClick={handleContinueButtonClick}>
                Continue
              </button>
            </div>
            {showAdditionalInfo && validEmail && (
              <div id="additional-info">
                <div id="confirm-email">
                  <label htmlFor="confirmEmail">Confirm Email:</label>
                  <input
                    id="confirmEmail"
                    type="email"
                    value={confirmEmail}
                    onChange={handleConfirmEmailChange}
                    //required
                  />
                </div>
                <div id="first-name">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    onChange={handleFirstNameChange}
                    //required
                  />
                </div>
                <div id="last-name">
                  <label htmlFor="lastname">Last Name:</label>
                  <input
                    id="lastname"
                    type="text"
                    value={lastName}
                    onChange={handleLastNameChange}
                    //required
                  />
                </div>
                <div id="password">
                  <label htmlFor="password">Password:</label>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    required
                  />
                </div>
                <div>
                  <button
                    id="create-account-button"
                    type="submit"
                    onClick={handleCreateClick}
                  >
                    Create Account
                  </button>
                </div>
                <div>
                  {createClicked && email !== confirmEmail && (
                    <p>Emails do not match</p>
                  )}
                  {createClicked && !validEmail && (
                    <p>Please enter a valid email address</p>
                  )}
                  {createClicked && firstName.length === 0 && (
                    <p>Please enter a first name.</p>
                  )}
                  {createClicked && lastName.length === 0 && (
                    <p>Please enter a last name.</p>
                  )}
                  {createClicked && password.length < 6 && (
                    <p>Please enter a password over 6 characters.</p>
                  )}
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
      <div className="split-container-secondary"></div>
    </div>
  );
}

export default CreateAccount;
