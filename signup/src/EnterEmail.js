import React from 'react';
import { useState } from 'react';
import './App.css';

/**
 * A React component for creating an account.
 * @function
 */
function CreateAccount() {
  /**
   * The email input's value.
   * @typedef {string} email
   */
  const [email, setEmail] = useState('');

  /**
   * Indicates whether the email is valid or not.
   * @typedef {boolean} validEmail
   */
  const [validEmail, setValidEmail] = useState(false);

  /**
   * The confirm email input's value.
   * @typedef {string} confirmEmail
   */
  const [confirmEmail, setConfirmEmail] = useState('');

  /**
   * Indicates whether to show the additional information form or not.
   * @typedef {boolean} showAdditionalInfo
   */
  const [showAdditionalInfo, setShowAdditionalInfo] = useState(false);

  /**
   * The first name input's value.
   * @typedef {string} firstName
   */
  const [firstName, setFirstName] = useState('');

  /**
   * The last name input's value.
   * @typedef {string} lastName
   */
  const [lastName, setLastName] = useState('');

  /**
   * Indicates whether the password is valid or not.
   * @typedef {boolean} validPassword
   */
  const [validPassword, setvalidPassword] = useState(false);

  /**
   * The password input's value.
   * @typedef {string} password
   */
  const [password, setPassword] = useState('');

  /**
   * Indicates whether all form data is valid or not.
   * @typedef {boolean} validData
   */
  const [validData, setvalidData] = useState(false);

  /**
   * Indicates whether the Create Account button is clicked or not.
   * @typedef {boolean} createClicked
   */
  const [createClicked, setCreateClicked] = useState(false);

  /**
   * Indicates whether to show the Continue button or not.
   * @typedef {boolean} showContinueButton
   */
  const [showContinueButton, setshowContinueButton] = useState(true);

  /**
   * Validates the email input.
   * @function
   * @param {email} email - The email input's value.
   * @returns {boolean} - Whether the email is valid or not.
   */
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  /**
   * Resets the first name, last name, password and confirm email input's value to empty.
   * @function
   */
  function eraseFields() {
    setFirstName('');
    setLastName('');
    setPassword('');
    setConfirmEmail('');
  }

  /**
   * Handles the Continue button click event.
   * @function
   */
  function handleContinueButtonClick() {
    if (validEmail) {
      setShowAdditionalInfo(true);
      setshowContinueButton(false);
    } else {
      setShowAdditionalInfo(false);
      setshowContinueButton(true);
    }
  }

  /**
   * Handles the email input's change event.
   * @function
   * @param {Event} event - The change event.
   */
  /**

Handles email input change event
@param {Event} event - The event object from the email input change event
@return {void}
*/
  function handleEmailChange(event) {
    const newEmail = event.target.value;
    setEmail(newEmail);
    setValidEmail(validateEmail(newEmail));
    if (!validEmail) {
      setshowContinueButton(true);
      setShowAdditionalInfo(false);
      eraseFields();
    }
  }
  /**
  
  Handles confirm email input change event
  @param {Event} event - The event object from the confirm email input change event
  @return {void}
  */
  function handleConfirmEmailChange(event) {
    const newEmail = event.target.value;
    setConfirmEmail(newEmail);
  }
  /**
  
  Handles first name input change event
  @param {Event} event - The event object from the first name input change event
  @return {void}
  */
  function handleFirstNameChange(event) {
    setFirstName(event.target.value);
  }
  /**
  
  Handles last name input change event
  @param {Event} event - The event object from the last name input change event
  @return {void}
  */
  function handleLastNameChange(event) {
    setLastName(event.target.value);
  }
  /**
  
  Handles password input change event
  @param {Event} event - The event object from the password input change event
  @return {void}
  */
  function handlePasswordChange(event) {
    setPassword(event.target.value);
    setvalidPassword(event.target.value.length >= 6);
  }
  /**
  
  Validates all input fields
  @return {void}
  */
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
  /**
  
  Handles create account button click event
  @return {void}
  */
  function handleCreateClick() {
    setCreateClicked(true);
    validateAll();
  }
  /**
  
  Submits the form and logs the form data to the console if valid
  @param {Event} event - The event object from the form submission event
  @return {void}
  */
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
  /**
  
  Renders the Create Account page
  @return {JSX.Element}
  */
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
              {showContinueButton && (
                <button
                  id="continue-button"
                  onClick={handleContinueButtonClick}
                >
                  Continue
                </button>
              )}
            </div>
            {validEmail && showAdditionalInfo && (
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
                    <p className="error">Emails do not match</p>
                  )}
                  {createClicked && !validEmail && (
                    <p className="error">Please enter a valid email address</p>
                  )}
                  {createClicked && firstName.length === 0 && (
                    <p className="error">Please enter a first name.</p>
                  )}
                  {createClicked && lastName.length === 0 && (
                    <p className="error">Please enter a last name.</p>
                  )}
                  {createClicked && password.length < 6 && (
                    <p className="error">
                      Please enter a password over 6 characters.
                    </p>
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
