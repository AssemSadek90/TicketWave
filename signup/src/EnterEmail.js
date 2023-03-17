import React from 'react';
import { useState } from 'react';

function CreateAccount() {
  const [email, setEmail] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);
  const [password, setPassword] = useState('');

  function vaildateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }
  function handleContinueButtonClick() {
    setValidEmail(vaildateEmail(email));
    setShowAdditionalInfo(validEmail);
  }
  //function that handles the input change of email
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setValidEmail(vaildateEmail(newEmail));
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
            <div id="confirm-email"></div>
            <div id="first-name"></div>
            <div id="last-name"></div>
            <div id="password"></div>
          </form>
        </div>
      </div>
      <div className="split-container-secondary"></div>
    </div>
  );
}

export default CreateAccount;
