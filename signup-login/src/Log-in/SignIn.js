import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
//import axios from 'axios';
import './Log-in-styling/Login.css';
import server from '../server';
import {
  isValidSession,
  getCredentials,
  getUserID,
} from '../Credentials/Credentials';
//import GoogleIcon from './Google_G_Logo.png';
//import FacebookIcon from '../EventDetails/Facebook.png';
//import { ReactComponent as GoogleIcon } from '.../google-icon.svg';
//import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import GoogleLogin from './GoogleSignIn';
import Footer from '../Footer/Footer';

/**
 * A React component for creating an account.
 * @function
 */
function SignIn() {
  /**
   * State variables related to the user's existence and the forgot password functionality.
   *
   * @typedef {Object} UserState
   * @property {boolean} userExists - Indicates whether a user exists.
   * @property {boolean} forgotPasswordClicked - Indicates whether the forgot password button has been clicked.
   * @property {string} forgotPasswordEmail - The email entered by the user in the forgot password form.
   * @property {string} forgotPasswordUsername - The username entered by the user in the forgot password form.
   */

  /**
   * The state related to the user's existence and the forgot password functionality.
   *
   * @type {UserState}
   */
  const [userExists, setUserExists] = useState(false);

  /**
   * Indicates whether the forgot password button has been clicked.
   *
   * @type {[boolean, function]} A tuple containing the forgot password clicked state and its setter.
   */
  const [forgotPasswordClicked, setForgotPasswordClicked] = useState(false);

  /**
   * The email entered by the user in the forgot password form.
   *
   * @type {[string, function]} A tuple containing the forgot password email state and its setter.
   */
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState('');

  /**
   * The username entered by the user in the forgot password form.
   *
   * @type {[string, function]} A tuple containing the forgot password username state and its setter.
   */
  const [forgotPasswordUsername, setForgotPasswordUsername] = useState('');

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
    const requestOptions = {
      headers: { 'Content-Type': 'application/json' },
    };
    server
      .get(`/users/email/${user.email}/`, requestOptions)
      .then((response) => {
        console.log(response);
        // setIsLoading(false);
        if (response.data.username.length > 0) {
          setUserExists(true);
          //user.email = response.data.email;
          user.username = response.data.username;
          user.id = response.data.id;
          console.log(user);
          setInvalidFields(false);
          const requestOptions = {
            headers: { 'Content-Type': 'application/json' },
          };
          server
            .post('/auth/login/', user, requestOptions)
            .then((response) => {
              const accessToken = response.data.access;
              const refreshToken = response.data.refresh;
              localStorage.setItem('accessToken', accessToken);
              localStorage.setItem('refreshToken', refreshToken);
              console.log(response.data);
              isValidSession();
              getUserID();
              //navigate('/home');
            })
            .then(() => {
              getCredentials();
            })
            .then(() => {
              const isValidSession = localStorage.getItem('isValidSession');
              console.log(localStorage.getItem('userName'));
              console.log(isValidSession);
              if (isValidSession === 'true') {
                setIsLoading(false);
                navigate('/home');
              } else {
                setIsLoading(false);
              }
            })
            .catch((error) => {
              console.log('error', error);
              setIsLoading(false);
            });
        } else {
          setUserExists(false);
          setInvalidFields(true);
          //eraseFields();
        }
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  };

  /**

  Handles the forgot password functionality by setting the state to initiate password reset
  @function
  @returns {void}
  */

  function handleForgotPassword() {
    setForgotPasswordClicked(true);
    const requestOptions = {
      headers: { 'Content-Type': 'application/json' },
    };
    server
      .get(`/users/email/${email}/`, requestOptions)
      .then((response) => {
        console.log(response);
        if (response.data.username.length > 0) {
          setUserExists(true);
          console.log('User exists');
          const username = response.data.username;
          const email = response.data.email;
          //console.log(forgotPasswordUsername);
          //console.log(forgotPasswordEmail);
          //send email
          server
            .get(`/auth/password/reset/${username}/${email}/`)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => console.log(error));
        } else {
          setUserExists(false);
          eraseFields();
          console.log('User does not exist');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

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
    <div
      className="container-fluid"
      style={{ paddingRight: 0, paddingLeft: 0 }}
    >
      <div className="row">
        <div className="col-md-6 split-container-primary">
          <div className="split-container-content">
            <div className="header-create-element">
              <div className="company-name">Ticketwave</div>
              <div className="create-account-hl">Log in</div>
            </div>
            <form id="sign-in-form" onSubmit={submitForm}>
              <div className="additional-info">
                <div id="sign-in">
                  <input
                    id="email-sign-in"
                    //id="email-sign-in"
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={handleEmailChange}
                    //required
                  />
                </div>
                <div id="password">
                  <input
                    id="password-sign-in"
                    //id="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={handlePasswordChange}
                    //required
                  />
                </div>
                <div>
                  <button
                    id="submit-form-sign-in"
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
                  {!userExists && forgotPasswordClicked && (
                    <p className="error">Invalid email address.</p>
                  )}
                </div>
                <div>
                  <p id="navigate-email-sign-up">
                    Don't have an account? <Link to="/">Sign Up</Link>
                    {/* <div>
                      <a href="https://www.facebook.com" target={'_blank'}>
                        <img src={FacebookIcon} alt="logo"></img>
                      </a>
                    </div> */}
                  </p>
                  <p id="signin-reset-password">
                    <Link href="#" onClick={handleForgotPassword}>
                      Forgot Password?
                    </Link>
                  </p>
                  <a
                    style={{ textAlign: 'center' }}
                    href="https://ticketwave.me/api/google/login/login"
                  >
                    Sign in with Google
                  </a>
                </div>
                <div id="signInDiv">
                  {/* <GoogleLogin
                    onSuccess={(credentialResponse) => {
                      console.log(credentialResponse);
                    }}
                    onError={() => {
                      console.log('Login Failed');
                    }}
                  /> */}
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          style={{ padding: 0 }}
          className="fill col-md-6 split-container-secondary d-none d-md-block"
        >
          <img
            src="https://cdn.evbstatic.com/s3-build/perm_001/530d34/django/images/login/lateral-image-2.jpg"
            alt="Kitchen working"
            // style={{ height: '700px' }}
          ></img>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
