import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Log-in-styling/Login.css';
import server from '../server';

/**
 * A React component for creating an account.
 * @function
 */
function CreateAccount() {
  /**

  An object that represents the user being created.
  @type {Object}
  @constant user
  */
  const user = {};

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

  Represents whether a user exists or not.
  @type {Array}
  @property {boolean} userExists - The current state of whether a user exists or not.
  @property {function} setUserExists - A function that sets the userExists state.
  */
  const [userExists, setUserExists] = useState(false);

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

  Represents whether the application is currently loading or not.
  @type {Array}
  @property {boolean} isLoading - The current state of whether the application is loading or not.
  @property {function} setIsLoading - A function that sets the isLoading state.
  */
  const [isLoading, setIsLoading] = useState(false);

  /**

  Represents whether the email input field is disabled or not.
  @type {Array}
  @property {boolean} emailDisabled - The current state of whether the email input field is disabled or not.
  @property {function} setEmailDisabled - A function that sets the emailDisabled state.
  */
  const [emailDisabled, setEmailDisabled] = useState(false);

  /**

  Represents whether the "Edit" button has been clicked or not.
  @type {Array}
  @property {boolean} showEditEmail - The current state of whether the "Edit" button has been clicked or not.
  @property {function} setShowEditEmail - A function that sets the showEditEmail state.
  */
  const [showEditEmail, setShowEditEmail] = useState(false);

  /**

  A function provided by the react-router-dom package that allows for programmatic navigation.
  @function
  @name navigate
  */

  const navigate = useNavigate();
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
    setIsLoading(true);
    server
      .get(`/users?email=${email}`)
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);

        if (data.length > 0) {
          setUserExists(true);
          console.log('User already exists');
          if (userExists || !validEmail) {
            setShowAdditionalInfo(false);
            setshowContinueButton(true);
            setShowEditEmail(false);
            setEmailDisabled(false);
          }
        } else {
          setUserExists(false);
          console.log('User does not exist');
          if (validEmail) {
            setShowAdditionalInfo(true);
            setshowContinueButton(false);
            setShowEditEmail(true);
            setEmailDisabled(true);
          }
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }

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
      setShowEditEmail(false);
      setEmailDisabled(false);
      setCreateClicked(false);
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
      user.email = email;
      user.firstName = firstName;
      user.lastName = lastName;
      user.password = password;
      user.is_public = true;
      user.image_id = null;
      handleSignUp(user);
    }
  }
  /**

  A function that handles the "Edit" button click event.
  @function
  @name handleEditClick
  */
  const handleEditClick = () => {
    setEmailDisabled(false);
    setShowEditEmail(false);
    setshowContinueButton(true);
    setShowAdditionalInfo(false);
    setCreateClicked(false);
    eraseFields();
  };

  /**

  A function that navigates to the "/home" route.
  @function
  @name navigateHome
  */
  const navigateHome = () => {
    server
      .get(`/users?email=${email}`)
      .then((response) => response.data)
      .then((data) => {
        localStorage.setItem('userId', data[0].id);
        navigate('/home');
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
        return;
      });
  };

  /**

  A function that handles the sign up process.
  @function
  @name handleSignUp
  @param {Object} user - An object that represents the user being signed up.
  @param {string} user.email - The email address of the user being signed up.
  @param {string} user.password - The password of the user being signed up.
  */
  const handleSignUp = (user) => {
    const requestOptions = {
      headers: { 'Content-Type': 'application/json' },
    };

    server
      .post('/users', user, requestOptions)
      .then((response) => console.log(response.data))
      .catch((error) => console.log(error));
    navigateHome();
  };

  /**
  
  Renders the Create Account page
  @return {JSX.Element}
  */
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 split-container-primary">
          <div className="split-container-content">
            <div className="header-create-element">
              <h1 className="company-name">Ticketwave</h1>
              <h2 className="eds-text-hl">Create an account</h2>
            </div>
            <form onSubmit={submitForm}>
              <div className="additional-info" id="create-account">
                <input
                  id="email"
                  type="email"
                  placeholder="Email address"
                  value={email}
                  disabled={emailDisabled}
                  onChange={handleEmailChange}
                  //required
                />
                <div>
                  <div>
                    {showContinueButton && (
                      <button
                        className="eds-btn eds-btn--submit eds-btn--fill eds-btn--block"
                        disabled={isLoading}
                        onClick={handleContinueButtonClick}
                      >
                        {isLoading ? 'Loading...' : 'Continue'}
                      </button>
                    )}
                  </div>
                  <span>
                    {showEditEmail && (
                      <button
                        className="eds-btn eds-btn--submit eds-btn--fill eds-btn--block"
                        onClick={handleEditClick}
                      >
                        Edit
                      </button>
                    )}
                  </span>
                </div>
                {userExists && (
                  <div>
                    <p className="error">User already exists.</p>
                  </div>
                )}
              </div>
              {validEmail && showAdditionalInfo && (
                <div className="additional-info">
                  <div id="confirm-email">
                    <input
                      id="confirmEmail"
                      type="email"
                      placeholder="Confirm email address"
                      value={confirmEmail}
                      onChange={handleConfirmEmailChange}
                      //required
                    />
                  </div>
                  <div id="first-name">
                    <input
                      id="firstName"
                      type="text"
                      placeholder="First name"
                      value={firstName}
                      onChange={handleFirstNameChange}
                      //required
                    />
                  </div>
                  <div id="last-name">
                    <input
                      id="lastname"
                      type="text"
                      placeholder="Last name"
                      value={lastName}
                      onChange={handleLastNameChange}
                      //required
                    />
                  </div>
                  <div id="password">
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                      required
                    />
                  </div>
                  <div>
                    <button
                      className="eds-btn eds-btn--submit eds-btn--fill eds-btn--block"
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
                      <p className="error">
                        Please enter a valid email address
                      </p>
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
            <div>
              <p>
                Already have an account? <Link to="/signin">Sign in</Link>
              </p>
            </div>
          </div>
        </div>
        <div className="fill col-md-6 split-container-secondary d-none d-md-block">
          <img
            src="https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg"
            alt="Kitchen working"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
