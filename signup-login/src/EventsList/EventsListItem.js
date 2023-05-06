import React from 'react';
import './EventsList.css';
const EventsListItem = (props) => {
  return (
    <div
      class="eds-g-group eds-list-item edit-list-item eds-align--space-between eds-l-pad-all-4 eds-l-mn-pad-hor-6 eds-l-md-pad-hor-6 eds-l-mw-pad-hor-6 eds-l-ln-pad-hor-6 eds-l-lg-pad-hor-6 eds-l-lw-pad-hor-6 snipcss-lLxHJ"
      data-spec="edit-list-item"
    >
      <div class="eds-g-cell-11-12">
        {/* <a
          href="/myevent?eid=622758747177"
          data-spec="edit-list-item-button"
          class="eds-btn--link eds-btn--none eds-btn--block"
        > */}
        <div class="eds-g-group">
          <div class="eds-list-item-content eds-align--left eds-align--mn-right eds-align--md-right eds-align--mw-right eds-align--ln-right eds-align--lg-right eds-align--lw-right">
            <div class="eds-g-cell-7-12 edit-list-item__content-bar-grid-container eds-g-cell-mn-7-12 eds-g-cell-md-7-12 eds-g-cell-mw-7-12 eds-g-cell-ln-7-12 eds-g-cell-lg-7-12 eds-g-cell-lw-7-12">
              <div
                class="edit-list-item__content-bar eds-text-bs eds-text-color--ui-600 eds-l-sn-mar-bot-1 eds-l-sm-mar-bot-1 eds-l-sw-mar-bot-1"
                data-spec="edit-list-item-content-bar"
              >
                <div
                  class="eds-list-item eds-list-item--align-middle"
                  data-spec="eds-list-item"
                >
                  <div
                    class="eds-list-item__aside eds-list-item__extra-content eds-l-pad-right-4"
                    data-spec="list-item-extra-content"
                  >
                    <div class="eds-show-up-lg">
                      <div class="date-thumbnail eds-text--center eds-l-mar-top-1">
                        <p
                          class="date-thumbnail__month eds-text-color--primary-brand eds-text-bs"
                          data-spec="date-thumbnail-month"
                        >
                          {props.event_month}
                        </p>
                        <p
                          class="date-thumbnail__day eds-text-bl eds-text-color--ui-600"
                          data-spec="date-thumbnail-day"
                        >
                          {props.event_day}
                        </p>
                      </div>
                    </div>
                  </div>
                  <span
                    class="eds-list-item__aside eds-list-item__graphic eds-list-item__graphic--square"
                    data-spec="list-item-graphic"
                    alt=""
                  >
                    <img
                      src="./images/no-event-image-placeholder-2x.png"
                      alt=""
                      data-spec="list-item-graphic-image"
                    />
                  </span>
                  <div
                    class="eds-list-item__contents"
                    data-spec="eds-list-item-contents"
                  >
                    <p class="eds-text-bm eds-text-color--ui-900">
                      {props.event_creator}
                    </p>
                    <div class="eds-l-mar-vert-1">
                      <p
                        class="eds-show-down-ln"
                        data-spec="event-list-item-datetime"
                      >
                        May 31, 2023 at 7:00 PM +04
                      </p>
                      <p data-spec="event-list-item-venue">
                        {props.event_location}
                      </p>
                      <p
                        class="eds-show-up-lg"
                        data-spec="event-list-item-time"
                      >
                        {props.event_date}
                      </p>
                    </div>
                    <div>
                      <div class="eds-show-down-mn">
                        <p
                          class="eds-text-color--grey-900 eds-l-mar-bot-1"
                          data-spec="event-list-item-gross"
                        >
                          $0.00 Gross
                        </p>
                      </div>
                      <div class="sales-status eds-l-pad-right-2 eds-show-down-ln">
                        <span
                          class="eds-text-color--grey-900"
                          data-spec="sales-status-label"
                        >
                          <i
                            class="eds-vector-image eds-icon--small eds-vector-image--ui-green"
                            data-spec="icon"
                            data-testid="icon"
                            aria-hidden="true"
                          >
                            <svg
                              id="status-dot-chunky_svg__eds-icon--alert-chunky_svg"
                              x="0"
                              y="0"
                              viewBox="0 0 24 24"
                            >
                              <circle cx="12" cy="12" r="3"></circle>
                            </svg>
                          </i>
                          {props.status}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="eds-g-cell-5-12 edit-list-item__action-bar-grid-container eds-g-cell-mn-5-12 eds-g-cell-md-5-12 eds-g-cell-mw-5-12 eds-g-cell-ln-5-12 eds-g-cell-lg-5-12 eds-g-cell-lw-5-12">
              <div
                class="edit-list-item__action-bar edit-list-item--column eds-align--left eds-align--mn-right eds-align--md-right eds-align--mw-right eds-align--ln-right eds-align--lg-right eds-align--lw-right eds-text-bm eds-text-color--ui-900"
                data-spec="edit-list-item-action-bar"
              >
                <div class="event-list-item__content">
                  <div class="eds-g-group eds-text-color--grey-600">
                    <div class="eds-g-cell eds-g-cell-lg-4-12 eds-g-cell-md-6-12 eds-show-up-md eds-l-pad-hor-2">
                      <div>
                        <p
                          class="eds-align--sm-right eds-align--sn-right"
                          data-spec="event-list-item-sold"
                        >
                          {props.soldTickets}/{props.capacity}
                        </p>
                        <div class="eds-show-up-mn">
                          <div>
                            <div
                              class="eds-progress-indicator--linear__rail style-E6Ukb"
                              role="progressbar"
                              aria-valuenow="0"
                              aria-valuemin="0"
                              aria-valuemax="100"
                              aria-label="progressbar"
                              id="style-E6Ukb"
                            >
                              <div
                                class="eds-progress-indicator--linear__line eds-progress-indicator--linear-determinate__line eds-bg-color--vibrant-green style-4ornC"
                                id="style-4ornC"
                              ></div>
                            </div>
                            <progress
                              class="eds-is-hidden-accessible"
                              value="0"
                              max="100"
                            ></progress>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      class="eds-g-cell eds-g-cell-lg-4-12 eds-g-cell-md-6-12 eds-show-up-md eds-l-pad-hor-2"
                      data-spec="contents-grid-second-column"
                    >
                      <p data-spec="event-list-item-gross">
                        ${props.soldTickets}
                      </p>
                    </div>
                    <div class="eds-g-cell eds-g-cell-lg-4-12 eds-show-up-lg eds-l-pad-hor-0">
                      <div class="eds-grid">
                        <div class="eds-g-group">
                          <div class="eds-g-cell eds-g-cell-12-12">
                            <div
                              class="eds-g-cell eds-g-cell-2-12"
                              data-spec="event-status-badge-icon"
                            >
                              <i
                                class="eds-vector-image eds-icon--small eds-vector-image--ui-green eds-l-pad-right-1"
                                data-spec="icon"
                                data-testid="icon"
                                aria-hidden="true"
                              >
                                <svg
                                  id="status-dot-chunky_svg__eds-icon--alert-chunky_svg"
                                  x="0"
                                  y="0"
                                  viewBox="0 0 24 24"
                                >
                                  <circle cx="12" cy="12" r="3"></circle>
                                </svg>
                              </i>
                            </div>
                            <div
                              class="event-status-badge-label eds-g-cell eds-g-cell-10-12 eds-l-pad-left-1"
                              data-spec="event-status-badge-label"
                            >
                              {props.event_status}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="eds-g-cell eds-g-cell-lg-4-12 eds-show-up-lg eds-l-pad-hor-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </a> */}
      </div>
      <div
        class="eds-g-cell eds-g-cell--has-overflow eds-g-cell-1-12"
        data-spec="edit-list-item-more-actions-bar"
      >
        <div class="eds-text--right">
          <div class="eds-more-actions">
            <span
              class="eds-icon-button eds-icon-button--neutral"
              data-spec="icon-button"
            >
              <button
                data-spec="eds-more-actions-toggle"
                aria-haspopup="true"
                class="eds-btn--button eds-btn--none eds-btn--icon-only"
                type="button"
              >
                <i
                  class="eds-vector-image eds-icon--small eds-vector-image--block"
                  title=""
                  data-spec="icon"
                  data-testid="icon"
                >
                  <svg
                    id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_svg"
                    x="0"
                    y="0"
                    viewBox="0 0 24 24"
                  >
                    <path
                      id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_2"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10 18c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z"
                    ></path>
                    <circle
                      id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      cx="12"
                      cy="12"
                      r="2"
                    ></circle>
                    <circle
                      id="vertical-dots-chunky_svg__eds-icon--vertical-dots-chunky_dot_1"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      cx="12"
                      cy="6"
                      r="2"
                    ></circle>
                  </svg>
                  <span class="eds-is-hidden-accessible">
                    View more actions
                  </span>
                </i>
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventsListItem;
