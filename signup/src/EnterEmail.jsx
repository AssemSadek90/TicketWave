import React from 'react';
import { useState } from 'react';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [confirmEmail, setConfirmEmail] = useState('');
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('');

  function vaildateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function handleContinueButtonClick() {
    setShowAdditionalInfo(true);
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

  return (
    <div className="create-account-main">
      <div className="split-container-primary">
        <div className="split-container-content">
          <div className="header-create-element">
            <h1>Ticketwave</h1>
            <h1>Create an account</h1>
          </div>
          <form>
            <div id="create-account">
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                required
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
                    required
                  />
                </div>
                <div id="first-name">
                  <label htmlFor="firstName">First Name:</label>
                  <input
                    id="firstName"
                    type="text"
                    value={firstName}
                    //onChange={handleFirstNameChange}
                    required
                  />
                </div>
                <div id="last-name"></div>
                <div id="password"></div>
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
