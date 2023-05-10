import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

/**
 * Component for the second navigation bar.
 * @component
 * @returns {JSX.Element} JSX representation of the component.
 */
const SecondNav = () => {
  /**
   * Hook for navigation within the application.
   */
  const navigate = useNavigate();

  /**
   * Handles the click event for creating a new event and navigates to the basic-info route.
   * @function
   */
  const handleCreateEventClick = () => {
    localStorage.setItem('eventID', 0);
    navigate('/basic-info');
  };

  /**
   * State variable for the selected option.
   * @type {string}
   */
  const [selectedOption, setSelectedOption] = useState('');

  /**
   * Handles the change event for the option selection.
   * @function
   * @param {Object} event - The event object.
   */
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div className="eds-g-grid eds-align--center-vertical eds-l-mar-top-10 eds-l-mar-bot-10 filter-container snipcss0-2-14-15 snipcss-diTo1">
      <div className="eds-g-cell eds-g-cell-12-12 eds-g-cell-lw-md-4-12 eds-g-cell-sm-7-12 eds-g-cell-md-5-12 snipcss0-3-15-16">
        <div className="eds-g-grid snipcss0-4-16-17">
          <div className="eds-show-up-sm  eds-g-cell eds-g-cell-12-12 eds-g-cell-sm-5-12 eds-g-cell-md-5-12 eds-g-cell-lg-7-12 snipcss0-5-17-34">
            <div className="eds-g-grid view-mode snipcss0-6-34-35">
              <div className="eds-g-cell eds-g-cell-12-12 eds-g-cell-md-12-12 mode-selector-divider snipcss0-7-35-36">
                <div className="eds-show-up-lg snipcss0-8-36-37">
                  <span className="events-view-mode-selector eds-show-up-sm snipcss0-9-37-38">
                    <span className="eds-l-mar-right-2 events-view-mode-selector--active snipcss0-10-38-39">
                      <button
                        aria-label="List"
                        className="list-creator eds-btn eds-btn--button eds-btn--neutral with-text snipcss0-11-39-40"
                        type="button"
                      >
                        <svg viewBox="0 0 24 24" className="snipcss0-12-40-41">
                          <path
                            id="unordered-list-chunky_svg__eds-icon--unordered-list-chunky_svg"
                            d="M4 5h2v2H4V5zm0 6h2v2H4v-2zm0 6h2v2H4v-2zM8 5h12v2H8V5zm0 6h12v2H8v-2zm0 6h12v2H8v-2z"
                          ></path>
                        </svg>{' '}
                        <span className="snipcss0-12-40-42 ">List</span>
                      </button>
                    </span>
                  </span>
                </div>

                <div className="vertical-divider snipcss0-8-36-57"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eds-g-cell eds-g-cell-12-12 eds-l-sm-pad-left-4 dropdowns-container eds-g-cell-sm-5-12 eds-g-cell-md-5-12 snipcss0-3-15-58">
        <div className="event-filter-dropdown-menu__container snipcss0-4-58-59">
          <div tabIndex="-1" className="snipcss0-5-59-60">
            <div
              data-spec="dropdown-menu"
              role="menubar"
              tabIndex="-1"
              className="eds-dropdown-menu snipcss0-6-60-61"
            >
              <div
                className="eds-dropdown-menu__link ignore-react-onclickoutside snipcss0-7-61-62"
                data-spec="dropdown-menu-link"
                role="menuitem"
                tabIndex="0"
                aria-label="Menu dropdown link"
              >
                <div
                  className="eds-dropdown-menu__contents snipcss0-8-62-63"
                  data-spec="dropdown-menu-contents className='dropdown-creator'"
                >
                  <div className="event-filter-dropdown-menu__selected-content snipcss0-9-63-64">
                    <span className="eds-l-pad-left-2 snipcss0-10-64-65">
                      <span
                        data-spec="filter-events-upcoming"
                        className="snipcss0-11-65-66 className='dropdown-creator'"
                      >
                        <div
                          data-spec="filter-events-upcoming"
                          className="snipcss0-11-65-66"
                        >
                          <select
                            id="dropdown-creator"
                            data-spec="filter-events-upcoming"
                            className="snipcss0-11-65-66 dropdown-creator"
                            onChange={handleOptionChange}
                          >
                            <option
                              id="upcoming-events"
                              className="dropdown-creator"
                              value="upcoming"
                            >
                              Upcoming Events
                            </option>
                            <option
                              id="past-events"
                              className="dropdown-creator"
                              value="past"
                            >
                              Past Events
                            </option>
                            <option
                              id="all-events"
                              className="dropdown-creator"
                              value="all"
                            >
                              All Events
                            </option>
                          </select>
                        </div>

                        {/* Upcoming events */}
                      </span>
                      <span className="eds-is-hidden-accessible snipcss0-11-65-67">
                        selected
                      </span>
                    </span>
                  </div>
                </div>
                <span className="eds-dropdown-menu__icon snipcss0-8-62-71">
                  <i
                    className="eds-vector-image eds-icon--small eds-vector-image--grey-400 eds-vector-image--block snipcss0-9-71-72"
                    data-spec="icon"
                    data-testid="icon"
                    aria-hidden="true"
                  >
                    <svg
                      id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_svg"
                      x="0"
                      y="0"
                      viewBox="0 0 24 24"
                      className="snipcss0-10-72-73"
                    >
                      <path
                        id="chevron-down-chunky_svg__eds-icon--chevron-down-chunky_base"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7 10.2l5 5 5-5-1.4-1.4-3.6 3.6-3.6-3.6z"
                      ></path>
                    </svg>
                  </i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="eds-show-up-md eds-g-cell eds-g-cell-2-12 snipcss0-3-15-74">
        <div className="create-event-creator snipcss0-4-74-75">
          <div
            id="create-event-btn-creator"
            onClick={handleCreateEventClick}
            className=" eds-btn eds-btn--link eds-btn--fill snipcss0-5-75-76"
            style={{
              padding: '0',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Create Event
          </div>
        </div>
      </div>
    </div>
  );
};
export default SecondNav;
