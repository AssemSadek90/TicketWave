import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';

/**
 * A React component for creating an account.
 * @function
 */
function SignIn() {
  /**

  Initializes an axios instance with a specified baseURL.
  @type {Object}
  @constant server
  @property {string} baseURL - The base URL for the axios instance.
  */
  const server = axios.create({
    baseURL: 'http://localhost:3000',
  });

  /**
  A function provided by the react-router-dom package that allows for programmatic navigation.
  @function
  @name navigate
  */
  const navigate = useNavigate();

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
  Represents whether there are any invalid fields in a form or not.
  @type {Array}
  @property {boolean} invalidFields - The current state of whether there are any invalid fields in a form or not.
  @property {function} setInvalidFields - A function that sets the invalidFields state.
*/
  const [invalidFields, setInvalidFields] = useState(false);

  /**
   * Indicates whether all form data is valid or not.
   * @typedef {boolean} validData
   */
  const [validData, setvalidData] = useState(false);

  /**
  Represents whether the "Sign In" button has been clicked or not.
  @type {Array}
  @property {boolean} signInClicked - The current state of whether the "Sign In" button has been clicked or not.
  @property {function} setSignInClicked - A function that sets the signInClicked state.
  */
  const [signInClicked, setSignInClicked] = useState(false);

  /**
  Represents whether the application is currently loading or not.
  @type {Array}
  @property {boolean} isLoading - The current state of whether the application is loading or not.
  @property {function} setIsLoading - A function that sets the isLoading state.
  */
  const [isLoading, setIsLoading] = useState(false);

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
  
  Validates all input fields
  @return {void}
  */
  function validateAll() {
    if (!validPassword) {
      setvalidData(false);
    } else if (!validEmail) {
      setvalidData(false);
    } else {
      setvalidData(true);
    }
  }

  /**
   * Handles the Continue button click event.
   * @function
   */
  function handleLogInClick() {
    setSignInClicked(true);
    validateAll();
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
  
  Submits the form and logs the form data to the console if valid
  @param {Event} event - The event object from the form submission event
  @return {void}
  */
  function submitForm(event) {
    event.preventDefault();
    if (validData) {
      user.email = email;
      user.password = password;
      handleSignIn(user);
    }
  }

  /**
  A function that handles user sign-in by sending a request to the server to check if the provided credentials match an existing user.
  @function
  @param {Object} user - An object that contains the user's email and password.
  @param {string} user.email - The user's email.
  @param {string} user.password - The user's password.
  @returns {undefined} This function does not return anything.
  */
  const handleSignIn = (user) => {
    setIsLoading(true);
    server
      .get(`/users?email=${email}`)
      .then((response) => response.data)
      .then((data) => {
        setIsLoading(false);
        if (data.length > 0 && data[0].password === password) {
          console.log('User exists');
          localStorage.setItem('userId', data[0].id);
          setInvalidFields(false);
          navigate('/home');
        } else {
          console.log('User does not exist');
          setInvalidFields(true);
          eraseFields();
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  /**
  A function that erases the values in the email and password input fields.
  @function
  @returns {undefined} This function does not return anything.
  */
  function eraseFields() {
    setEmail('');
    setPassword('');
  }

  /**
  
  Renders the Create Account page
  @return {JSX.Element}
  */
  return (
    <div class="container-fluid">
      <div className="row">
        <div className="col-md-6 split-container-primary">
          <div className="split-container-content">
            <div className="header-create-element">
              <h1 className="company-name">Ticketwave</h1>
              <h2 className="eds-text-hl">Log in</h2>
            </div>
            <form onSubmit={submitForm}>
              <div className="additional-info">
                <div id="sign-in">
                  <input
                    id="email-sign-in"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
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
                    //required
                  />
                </div>
                <div>
                  <button
                    className="eds-btn eds-btn--submit eds-btn--fill eds-btn--block"
                    type="submit"
                    onClick={handleLogInClick}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Loading...' : 'Log in'}
                  </button>
                </div>
                <div>
                  {signInClicked && !validEmail && (
                    <p className="error">Please enter a valid email address</p>
                  )}
                  {signInClicked && password.length < 6 && (
                    <p className="error">
                      Please enter a password over 6 characters.
                    </p>
                  )}
                  {invalidFields && (
                    <p className="error">Invalid email or password</p>
                  )}
                </div>
                <div>
                  <p>
                    Don't have an account? <Link to="/">Sign Up</Link>
                  </p>
                </div>
                <div id="signInDiv">
                  <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  />
                </div>
              </div>
            </form>
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

export default SignIn;
