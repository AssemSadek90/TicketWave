import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css';

/**
 * A React component for creating an account.
 * @function
 */
function SignIn() {
  const server = axios.create({
    baseURL: 'http://localhost:3000',
  });

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
  const [invalidFields, setInvalidFields] = useState(false);

  //const history = useHistory();

  /**
   * Indicates whether all form data is valid or not.
   * @typedef {boolean} validData
   */
  const [validData, setvalidData] = useState(false);
  const [signInClicked, setSignInClicked] = useState(false);

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

  function eraseFields() {
    setEmail('');
    setPassword('');
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
            <h1>Sign In</h1>
          </div>
          <form onSubmit={submitForm}>
            <div id="sign-in">
              <input
                id="email"
                type="email"
                value={email}
                onChange={handleEmailChange}
                //required
              />
            </div>
            <div id="additional-info">
              <div id="password">
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={handlePasswordChange}
                  //required
                />
              </div>
              <div>
                <button
                  id="log-in-button"
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
            </div>
          </form>
          <div>
            <p>
              Don't have an account? <Link to="/">Sign Up</Link>
            </p>
          </div>
          <div id="signInDiv">
            {/* <button type="button" onClick={handleGoogleSignIn}>
              Sign in with Google
            </button> */}
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
      </div>
      <div className="split-container-secondary"></div>
    </div>
  );
}

export default SignIn;
