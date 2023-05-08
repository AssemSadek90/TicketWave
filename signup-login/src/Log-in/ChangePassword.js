import { useState } from 'react';
import server from '../server';
import './Log-in-styling/ChangePassword.css';

/**
Represents a component for changing the user's password
*/
function ChangePassword() {
  /**
State variables for the new password, confirm password, whether the passwords match,
whether the passwords are valid, the current password, and whether the form is loading.
@type {Array}
@property {string} newPassword - The new password input value.
@property {function} setNewPassword - A function that sets the newPassword state.
@property {string} confirmPassword - The confirm password input value.
@property {function} setConfirmPassword - A function that sets the confirmPassword state.
@property {boolean} passwordsMatch - The current state of whether the new and confirm passwords match.
@property {function} setPasswordsMatch - A function that sets the passwordsMatch state.
@property {boolean} passwordsValid - The current state of whether the new and confirm passwords are valid.
@property {function} setPasswordsValid - A function that sets the passwordsValid state.
@property {string} currentPassword - The current password input value.
@property {function} setCurrentPassword - A function that sets the currentPassword state.
@property {boolean} isLoading - The current state of whether the form is loading or not.
@property {function} setIsLoading - A function that sets the isLoading state.
@property {boolean} isLoading - The current state of whether the application is loading or not.
@property {function} setIsLoading - A function that sets the isLoading state.
*/

  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordsMatch, setPasswordsMatch] = useState(false);
  const [passwordsValid, setPasswordsValid] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [validData, setValidData] = useState(false);
  //const [isLoading, setIsLoading] = useState(false);

  /**
  Validates whether the new and confirm passwords match and whether they are at least 8 characters long.
  If the passwords do not match or are not valid, sets the passwordsMatch and passwordsValid states to false.
  If the passwords match and are valid, sets the validData state to true.
  @function
  @returns {void}
  */
  function validateAll() {
    if (confirmPassword !== newPassword) {
      setPasswordsMatch(false);
      setValidData(false);
      //passwords don't match
    }
    if (
      (confirmPassword.length || newPassword.length || currentPassword.length) <
      8
    ) {
      setPasswordsValid(false);
      setValidData(false);
      //passwords are not valid length ( over 8 characters)
    } else {
      setValidData(true);
    }
  }

  /**
  Handles the form submission for changing the password.
  Validates the new and confirm passwords, and if they match and are valid, sends a post request to the server
  to change the password.
  @function
  @param {event} event - The event object for the form submission.
  @returns {void}
  */

  function handleSubmit(event) {
    event.preventDefault();
    //setIsLoading(true);
    validateAll();
    if (validData === false) {
      return;
    } else {
      const accessToken = localStorage.getItem('accessToken');
      console.log(accessToken);
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };
      server
        .post(
          '/auth/password/change/',
          { new_password1: newPassword, new_password2: confirmPassword },
          requestOptions
        )
        .then((response) => {
          //setIsLoading(false);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          //setIsLoading(false);
        });
    }
    //setIsLoading(false);
  }

  return (
    <main
      className="eds-structure__main snipcss-gHksn"
      data-spec="eds-structure-main"
    >
      <section
        className="eds-layout eds-layout--has-large-max-width eds-layout--has-horizontal-gutters"
        data-spec="eds-layout"
      >
        <div className="eds-layout__body" data-spec="eds-layout__body">
          <div>
            <div className="eds-l-mar-top-18 eds-l-sn-mar-left-2 eds-l-sm-mar-left-2 eds-l-sw-mar-left-2 eds-l-mn-mar-left-4 eds-l-md-mar-left-10 eds-l-mw-mar-left-10 eds-l-ln-mar-left-20 eds-l-lg-mar-left-20 eds-l-mar-left-20">
              <div className="eds-l-mar-bot-4">
                <h1 className="eds-text-hm account-settings__heading">
                  Your password
                </h1>
              </div>
              <hr
                className="eds-divider__hr eds-bg-color--ui-300 eds-divider--horizontal"
                data-spec="divider-hr"
                aria-hidden="true"
              />
              <div className="eds-g-cell eds-g-cell-md-4-12 eds-l-pad-top-4">
                <div className="eds-l-pad-bot-5">Set a new password.</div>
                <div className="eds-fx--fade-in eds-fx--delay-2">
                  <form onSubmit={handleSubmit}>
                    <div className="eds-l-pad-bot-3">
                      <div className="eds-password--v2">
                        <div
                          className="eds-field-styled eds-field-styled--static eds-field-styled--error style-ehH7R"
                          data-automation="current_password-field-wrapper"
                          data-testid="input-field-wrapper"
                          data-spec="input-field"
                          data-heap-redact-attributes="data-val"
                          id="style-ehH7R"
                        >
                          <div className="eds-field-styled__border-simulation">
                            <div className="eds-field-styled__internal">
                              <div className="eds-field-styled__input-container">
                                <div className="eds-field-styled__label-wrapper">
                                  <label
                                    className="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                                    id="current_password-label"
                                    htmlFor="current_password"
                                    data-spec="label-label"
                                  >
                                    <span
                                      className="eds-label__required-indicator eds-text-bs"
                                      data-spec="required-indicator"
                                    >
                                      <span className="eds-is-hidden-accessible">
                                        (required)
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <input
                                  className="eds-field-styled__input eds-field-styled__input--has-suffix"
                                  placeholder="Current Password"
                                  id="current_password"
                                  name="current_password"
                                  type="password"
                                  onChange={(e) => {
                                    setCurrentPassword(e.target.value);
                                  }}
                                  //value={currentPassword}
                                />
                              </div>
                              <span className="eds-field-styled__aside eds-field-styled__aside-suffix eds-field-styled__aside--minimal-spacing">
                                <div
                                  className="eds-password-icon__wrapper"
                                  data-spec="password-icon-button"
                                >
                                  <span
                                    className="eds-icon-button eds-icon-button--neutral"
                                    data-spec="icon-button"
                                  >
                                    <button
                                      className="eds-btn--button eds-btn--none eds-btn--icon-only"
                                      type="button"
                                    >
                                      <i
                                        className="eds-vector-image eds-icon--small eds-vector-image--block"
                                        title=""
                                        data-spec="icon"
                                        data-testid="icon"
                                      >
                                        <svg
                                          id="eye-on-chunky_svg__eds-icon--eye-on-chunky_svg"
                                          x="0"
                                          y="0"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_base"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 16.2c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2zm0-10.5c-4.2 0-7.8 2.6-9.2 6.3 1.5 3.7 5 6.3 9.2 6.3s7.8-2.6 9.2-6.3c-1.4-3.7-5-6.3-9.2-6.3z"
                                          ></path>
                                          <circle
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_dot"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            cx="12"
                                            cy="12"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                        <span className="eds-is-hidden-accessible">
                                          password visibility button
                                        </span>
                                      </i>
                                    </button>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                          <div className="eds-field__sub">
                            <div className="eds-field__sub--left">
                              <aside
                                className="eds-field-styled__annotation eds-text-bs eds-fx--fade-in eds-l-pad-top-1"
                                data-automation="eds-field-annotation"
                                role="alert"
                              >
                                Current password is required
                              </aside>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="eds-l-pad-bot-3">
                      <div className="eds-password--v2">
                        <div
                          className="eds-field-styled style-HC77o"
                          data-automation="new_password-field-wrapper"
                          data-testid="input-field-wrapper"
                          data-spec="input-field"
                          data-heap-redact-attributes="data-val"
                          id="style-HC77o"
                        >
                          <div className="eds-field-styled__border-simulation">
                            <div className="eds-field-styled__internal">
                              <div className="eds-field-styled__input-container">
                                <div className="eds-field-styled__label-wrapper">
                                  <label
                                    className="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                                    id="new_password-label"
                                    htmlFor="new_password"
                                    data-spec="label-label"
                                  >
                                    <span
                                      className="eds-label__required-indicator eds-text-bm"
                                      data-spec="required-indicator"
                                    >
                                      <span className="eds-is-hidden-accessible">
                                        (required)
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <input
                                  className="eds-field-styled__input eds-field-styled__input--has-suffix"
                                  placeholder="New Password"
                                  id="new_password"
                                  name="new_password"
                                  type="password"
                                  onChange={(e) => {
                                    setNewPassword(e.target.value);
                                  }}
                                  //value={newPassword}
                                />
                              </div>
                              <span className="eds-field-styled__aside eds-field-styled__aside-suffix eds-field-styled__aside--minimal-spacing">
                                <div
                                  className="eds-password-icon__wrapper"
                                  data-spec="password-icon-button"
                                >
                                  <span
                                    className="eds-icon-button eds-icon-button--neutral"
                                    data-spec="icon-button"
                                  >
                                    <button
                                      className="eds-btn--button eds-btn--none eds-btn--icon-only"
                                      type="button"
                                    >
                                      <i
                                        className="eds-vector-image eds-icon--small eds-vector-image--block"
                                        title=""
                                        data-spec="icon"
                                        data-testid="icon"
                                      >
                                        <svg
                                          id="eye-on-chunky_svg__eds-icon--eye-on-chunky_svg"
                                          x="0"
                                          y="0"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_base"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 16.2c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2zm0-10.5c-4.2 0-7.8 2.6-9.2 6.3 1.5 3.7 5 6.3 9.2 6.3s7.8-2.6 9.2-6.3c-1.4-3.7-5-6.3-9.2-6.3z"
                                          ></path>
                                          <circle
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_dot"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            cx="12"
                                            cy="12"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                        <span className="eds-is-hidden-accessible">
                                          password visibility button
                                        </span>
                                      </i>
                                    </button>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="eds-l-pad-bot-3">
                      <div className="eds-password--v2">
                        <div
                          className="eds-field-styled style-LlhJR"
                          data-automation="repeat_password-field-wrapper"
                          data-testid="input-field-wrapper"
                          data-spec="input-field"
                          data-heap-redact-attributes="data-val"
                          id="style-LlhJR"
                        >
                          <div className="eds-field-styled__border-simulation">
                            <div className="eds-field-styled__internal">
                              <div className="eds-field-styled__input-container">
                                <div className="eds-field-styled__label-wrapper">
                                  <label
                                    className="eds-field-styled__label eds-label-primary eds-field-styled__label--required"
                                    id="repeat_password-label"
                                    htmlFor="repeat_password"
                                    data-spec="label-label"
                                  >
                                    <span
                                      className="eds-label__required-indicator eds-text-bm"
                                      data-spec="required-indicator"
                                    >
                                      <span className="eds-is-hidden-accessible">
                                        (required)
                                      </span>
                                    </span>
                                  </label>
                                </div>
                                <input
                                  className="eds-field-styled__input eds-field-styled__input--has-suffix"
                                  placeholder="Repeat Password"
                                  id="repeat_password"
                                  name="repeat_password"
                                  type="password"
                                  onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                  }}
                                  //value={confirmPassword}
                                />
                              </div>
                              <span className="eds-field-styled__aside eds-field-styled__aside-suffix eds-field-styled__aside--minimal-spacing">
                                <div
                                  className="eds-password-icon__wrapper"
                                  data-spec="password-icon-button"
                                >
                                  <span
                                    className="eds-icon-button eds-icon-button--neutral"
                                    data-spec="icon-button"
                                  >
                                    <button
                                      className="eds-btn--button eds-btn--none eds-btn--icon-only"
                                      type="button"
                                    >
                                      <i
                                        className="eds-vector-image eds-icon--small eds-vector-image--block"
                                        title=""
                                        data-spec="icon"
                                        data-testid="icon"
                                      >
                                        <svg
                                          id="eye-on-chunky_svg__eds-icon--eye-on-chunky_svg"
                                          x="0"
                                          y="0"
                                          viewBox="0 0 24 24"
                                        >
                                          <path
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_base"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            d="M12 16.2c-2.3 0-4.2-1.9-4.2-4.2 0-2.3 1.9-4.2 4.2-4.2 2.3 0 4.2 1.9 4.2 4.2 0 2.3-1.9 4.2-4.2 4.2zm0-10.5c-4.2 0-7.8 2.6-9.2 6.3 1.5 3.7 5 6.3 9.2 6.3s7.8-2.6 9.2-6.3c-1.4-3.7-5-6.3-9.2-6.3z"
                                          ></path>
                                          <circle
                                            id="eye-on-chunky_svg__eds-icon--eye-on-chunky_dot"
                                            fillRule="evenodd"
                                            clipRule="evenodd"
                                            cx="12"
                                            cy="12"
                                            r="2.5"
                                          ></circle>
                                        </svg>
                                        <span className="eds-is-hidden-accessible">
                                          password visibility button
                                        </span>
                                      </i>
                                    </button>
                                  </span>
                                </div>
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="eds-l-mar-top-4 eds-l-mar-bot-8"
                        data-automation="password-strength-meter"
                      >
                        <div>
                          <div
                            className="eds-progress-indicator--linear__rail style-PvpCO"
                            role="progressbar"
                            aria-valuenow="0"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            aria-label="progressbar"
                            id="style-PvpCO"
                          >
                            <div
                              className="eds-progress-indicator--linear__line eds-progress-indicator--linear-determinate__line style-KDpfI"
                              id="style-KDpfI"
                            ></div>
                          </div>
                          <progress
                            className="eds-is-hidden-accessible"
                            value="0"
                            max="100"
                          ></progress>
                        </div>
                        <div className="eds-l-pad-top-2 eds-text-bs">
                          <span>Your password </span>
                          <span className="">
                            must be at least 8 characters
                          </span>
                        </div>
                      </div>
                    </div>
                    <button
                      data-automation="set-password-submit"
                      className="eds-btn eds-btn--submit eds-btn--fill"
                      type="submit"
                      //disabled={isLoading}
                      //onClick={handleSubmit}
                    >
                      {/* {isLoading ? 'Loading...' : 'Save'} */}
                      Save
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
export default ChangePassword;
