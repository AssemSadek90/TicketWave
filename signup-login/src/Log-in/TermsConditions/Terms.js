import React from 'react';
import { useState } from 'react';
import './Terms.css';

function Terms(props) {
  // const [cancelClicked, setCancelClicked] = useState(false);
  // const [agreeClicked, setAgreeClicked] = useState(false);
  function handleAgreeButtonClick() {
    props.handleSignUp();
    console.log('Agree button clicked');
  }
  function handleCancelClick() {
    props.handleCancelClick();
    console.log('Cancel button clicked');
  }

  return (
    <div>
      {
        <div
          id="edsModalContentChildren"
          className="eds-modal__content__children snipcss-QRQUc"
        >
          <div className="takeover-modal__content">
            <div className="eds-l-pad-all-8 eds-align--center">
              <div
                className="tos-form eds-fx--fade-in eds-fx--delay-2"
                data-testid="signup-tos-form"
              >
                <div className="auth-lib__header eds-text--left eds-l-mar-bot-10">
                  <div>
                    <div
                      className="eds-l-mar-bot-6 eds-fx--pop eds-fx--delay-1 auth-lib__header__icon"
                      data-testid="page-header-icon"
                    >
                      <i
                        className="eds-vector-image eds-icon--medium eds-vector-image--ui-700"
                        data-spec="icon"
                        data-testid="icon"
                        aria-hidden="true"
                      >
                        <svg
                          className="alert-chunky_svg__eds-icon--alert-chunky_svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            className="alert-chunky_svg__eds-icon--alert-chunky_base"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 18c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-14c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8z"
                          ></path>
                          <path
                            className="alert-chunky_svg__eds-icon--alert-chunky_dot"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 14h2v2h-2z"
                          ></path>
                          <path
                            className="alert-chunky_svg__eds-icon--alert-chunky_line"
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M11 8h2v5h-2z"
                          ></path>
                        </svg>
                      </i>
                    </div>
                    <h1
                      className="eds-text-hl eds-text-hs eds-l-mar-bot-5"
                      data-testid="page-header-title"
                    >
                      Terms and conditions
                    </h1>
                    <div
                      className="eds-l-pad-top-2 eds-text-bm eds-l-pad-top-2"
                      data-testid="page-header-subtitle"
                    >
                      <div className="privacy-terms eds-text--center">
                        <span
                          className="eds-text-color--grey-1000 eds-text-bs eds-l-mar-bot-5"
                          role="presentation"
                        >
                          I accept the{' '}
                          <a
                            href="/tos"
                            className="eds-link"
                            target="_blank"
                            id="tos"
                            rel="noopener noreferrer"
                          >
                            Eventbrite Terms of Service
                          </a>
                          ,{' '}
                          <a
                            href="/community-guidelines"
                            className="eds-link"
                            id="community-guidelines"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Community Guidelines{' '}
                          </a>
                          and have read the{' '}
                          <a
                            href="/privacypolicy"
                            className="eds-link"
                            id="privacy-policy"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Privacy Policy
                          </a>
                          .
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tos-form__actions eds-l-pad-bot-8 eds-align--center">
                  <button
                    id="signup-tos-form-button-cancel"
                    className="eds-btn eds-btn--button eds-btn--neutral eds-l-mar-right-8"
                    type="button"
                    onClick={() => {
                      handleCancelClick();
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    id="signup-tos-form-button-accept"
                    className="eds-btn eds-btn--button eds-btn--fill eds-l-mar-right-8"
                    type="button"
                    onClick={handleAgreeButtonClick}
                  >
                    Agree
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}

export default Terms;
