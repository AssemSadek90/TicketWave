/**
 * Renders social media share buttons for Facebook, Twitter, LinkedIn, WhatsApp, and email.
 * @param {string} Event_id - The ID of the event to share.
 * @returns {JSX.Element} The rendered component.
 */
import React from "react";
import "./dashboard.css";
import UrlEditor from "./copyandedit";
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
function Share(Event_id) {
  return (
    <div className="eds-l-mar-top-5 eds-l-pad-hor-3">
      <div className="eds-g-cell eds-g-cell-12-12 eds-g-cell-sm-8-12">
        <div className="eds-l-mar-top-2">
          <div className="eds-text-hs">Share</div>
          <div className="event-url-container eds-l-mar-vert-8">
            <div className="eds-g-grid" data-testid="copy-update-label">
              <div className="eds-g-cell eds-g-cell-12-12 eds-text-weight--heavy">
                Event URL
              </div>
              <div className="eds-g-cell 2">
                <UrlEditor />
              </div>
            </div>
          </div>
          <div className="eds-text-weight--heavy eds-l-pad-left-3">
            Share on
          </div>
          <div className="share-box-container">
            <div className="display-flex" data-testid="custom-share-box">
              <div data-spec="share-box-container">
                <FacebookShareButton url={Event_id.EventURL}>
                  <span
                    className="eds-l-pad-right-1"
                    data-spec="facebook-share-box-container"
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
                          <svg viewBox="0 0 22 22">
                            <path d="M14.893 11.89L15.336 9h-2.773V7.124c0-.79.387-1.562 1.63-1.562h1.26v-2.46s-1.144-.196-2.238-.196c-2.285 0-3.777 1.385-3.777 3.89V9h-2.54v2.89h2.54v6.989a10.075 10.075 0 003.124 0V11.89h2.33"></path>
                          </svg>
                          <span className="eds-is-hidden-accessible">
                            Share on Facebook
                          </span>
                        </i>
                      </button>
                    </span>
                  </span>
                </FacebookShareButton>
                <TwitterShareButton url={Event_id.EventURL}>
                  <span
                    className="eds-l-pad-right-1"
                    data-spec="twitter-share-box-container"
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
                          <svg viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M21.4 4.1s-.6.4-1.2.7c-.6.2-1.3.4-1.3.4s-2-2.3-4.9-.8c-2.9 1.5-2 4.5-2 4.5s-2.9-.2-4.9-1.2C4.9 6.5 3.4 4.6 3.4 4.6s-.9 1.4-.5 3 1.8 2.5 1.8 2.5-.4 0-.9-.2c-.5-.1-1-.4-1-.4s-.1 1.3.8 2.6S6 13.6 6 13.6l-.8.2h-.9s.2 1.1 1.4 2c1.1.8 2.3.8 2.3.8s-1.1.9-2.7 1.4c-1.6.5-3.3.3-3.3.3s6 4 12.2.3c6.2-3.7 5.7-10.7 5.7-10.7s.6-.4 1-.9l1-1.2s-.7.3-1.3.5c-.5.2-.9.2-.9.2s.6-.4.9-.9c.5-.7.8-1.5.8-1.5z"
                            ></path>
                          </svg>
                          <span className="eds-is-hidden-accessible">
                            Share on Twitter
                          </span>
                        </i>
                      </button>
                    </span>
                  </span>
                </TwitterShareButton>
                <EmailShareButton url={Event_id.EventURL}>
                  <span
                    className="eds-l-pad-right-1"
                    data-spec="email-share-box-container"
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
                            id="mail-fill-chunky_svg__eds-icon--mail-fill-chunky_svg"
                            x={0}
                            y={0}
                            viewBox="0 0 24 24"
                            xmlSpace="preserve"
                          >
                            <path
                              id="mail-fill-chunky_svg__eds-icon--mail-fill-chunky_base"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M12 14.2L4 8.4V18h16V8.4l-8 5.8z"
                            ></path>
                            <path
                              id="mail-fill-chunky_svg__eds-icon--mail-fill-chunky_top"
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M4.1 6l7.9 5.8L19.9 6z"
                            ></path>
                          </svg>
                          <span className="eds-is-hidden-accessible">
                            Share by Email
                          </span>
                        </i>
                      </button>
                    </span>
                  </span>
                </EmailShareButton>
                <LinkedinShareButton url={Event_id.EventURL}>
                  <span
                    className="eds-l-pad-right-1"
                    data-spec="linkedin-share-box-container"
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
                          <svg viewBox="0 0 24 24">
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M2.3 21.5h4.3V8.7H2.3v12.8zm2.2-19C3 2.5 2 3.5 2 4.7 2 6 2.9 7 4.5 7 6 7 6.9 6 6.9 4.7c0-1.2-1-2.2-2.4-2.2zm12.8 5.9c-2.2 0-3.1.7-4.1 2.1V8.7H8.9v12.8h4.3v-7c0-.3 0-.7.1-1 .3-1 1.1-1.7 2.2-1.7s1.7.6 2 1.5c.2.7.2 1.6.2 2.1v6.1H22v-7.6c0-2.5-1.2-5.5-4.7-5.5z"
                            ></path>
                          </svg>
                          <span className="eds-is-hidden-accessible">
                            Share on Linkedin
                          </span>
                        </i>
                      </button>
                    </span>
                  </span>
                </LinkedinShareButton>
                <WhatsappShareButton url={Event_id.EventURL}>
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
                        <svg viewBox="0 0 24 24">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M16.8 14c-.2-.1-1.5-.8-1.7-.9-.2-.1-.4-.1-.6.1-.2.2-.7.8-.8.9-.2.2-.3.2-.5 0-.2-.1-1-.4-2-1.3-.7-.7-1.2-1.5-1.3-1.8-.1-.3 0-.4.1-.5l.4-.4c.1-.1.2-.2.3-.4.1-.2.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.6-.4-.5-.5-.5h-.5c-.2 0-.4 0-.7.3-.2.2-.9.8-1 2 0 1.2.8 2.4.9 2.6.1.2 1.6 2.8 4.1 3.9 2.5 1.1 2.5.8 3 .7.5 0 1.5-.5 1.7-1.1.2-.6.3-1.1.2-1.2.1 0-.1-.1-.3-.2zm-4.6 5.9c-1.7 0-3.2-.5-4.5-1.3l-3.1 1 1-3c-1-1.3-1.6-3-1.6-4.8 0-4.5 3.7-8.1 8.2-8.1 4.5 0 8.2 3.6 8.2 8.1-.1 4.4-3.7 8.1-8.2 8.1zm0-17.9c-5.4 0-9.8 4.4-9.8 9.7 0 1.8.5 3.6 1.4 5L2 22l5.4-1.7c1.4.8 3 1.2 4.7 1.2 5.4 0 9.8-4.4 9.8-9.7C22 6.4 17.6 2 12.2 2z"
                          ></path>
                        </svg>
                        <span className="eds-is-hidden-accessible">
                          Share on WhatsApp
                        </span>
                      </i>
                    </button>
                  </span>
                </WhatsappShareButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Share;
