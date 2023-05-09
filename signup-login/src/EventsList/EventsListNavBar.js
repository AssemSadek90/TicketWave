import './EventsList.css';

/**
 * Component for the navigation bar in the events list.
 * @component
 * @returns {JSX.Element} JSX representation of the component.
 */

const EventsListNavBar = () => {
  return (
    <div
      className="eds-g-group eds-list-item edit-list-item eds-align--space-between eds-l-pad-all-4 eds-l-mn-pad-hor-6 eds-l-md-pad-hor-6 eds-l-mw-pad-hor-6 eds-l-ln-pad-hor-6 eds-l-lg-pad-hor-6 eds-l-lw-pad-hor-6 eds-show-up-sw eds-bg-color--grey-100 eds-l-pad-hor-6 eds-l-pad-vert-4 snipcss-3v3nW"
      data-spec="edit-list-item"
    >
      <div className="eds-g-cell-11-12">
        <div className="eds-g-group">
          <div className="eds-list-item-content eds-align--left eds-align--mn-right eds-align--md-right eds-align--mw-right eds-align--ln-right eds-align--lg-right eds-align--lw-right">
            <div className="eds-g-cell-7-12 edit-list-item__content-bar-grid-container eds-g-cell-mn-7-12 eds-g-cell-md-7-12 eds-g-cell-mw-7-12 eds-g-cell-ln-7-12 eds-g-cell-lg-7-12 eds-g-cell-lw-7-12">
              <div
                className="edit-list-item__content-bar eds-text-bs eds-text-color--ui-600 eds-l-sn-mar-bot-1 eds-l-sm-mar-bot-1 eds-l-sw-mar-bot-1"
                data-spec="edit-list-item-content-bar"
              >
                <div
                  className="eds-list-item eds-list-item--align-middle"
                  data-spec="eds-list-item"
                >
                  <div
                    className="eds-list-item__contents"
                    data-spec="eds-list-item-contents"
                  >
                    <span className="eds-text-bm eds-text-weight--heavy eds-text-color--ui-800">
                      Event
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="eds-g-cell-5-12 edit-list-item__action-bar-grid-container eds-g-cell-mn-5-12 eds-g-cell-md-5-12 eds-g-cell-mw-5-12 eds-g-cell-ln-5-12 eds-g-cell-lg-5-12 eds-g-cell-lw-5-12">
              <div
                className="edit-list-item__action-bar edit-list-item--column eds-align--left eds-align--mn-right eds-align--md-right eds-align--mw-right eds-align--ln-right eds-align--lg-right eds-align--lw-right eds-text-bm eds-text-color--ui-900"
                data-spec="edit-list-item-action-bar"
              >
                <div className="event-list-item__content eds-align--center-vertical">
                  <div className="eds-g-group eds-text-color--grey-600">
                    <div className="eds-g-cell eds-g-cell-lg-4-12 eds-g-cell-md-6-12 eds-show-up-md eds-l-pad-hor-2">
                      <span className="eds-text-weight--heavy eds-text-color--ui-800">
                        Sold
                      </span>
                    </div>
                    <div
                      className="eds-g-cell eds-g-cell-lg-4-12 eds-g-cell-md-6-12 eds-show-up-md eds-l-pad-hor-2"
                      data-spec="contents-grid-second-column"
                    >
                      <span className="eds-text-weight--heavy eds-text-color--ui-800">
                        Gross
                      </span>
                    </div>
                    <div className="eds-g-cell eds-g-cell-lg-4-12 eds-show-up-lg eds-l-pad-hor-2">
                      <span className="eds-text-weight--heavy eds-text-color--ui-800">
                        Status
                      </span>
                    </div>
                    <div className="eds-g-cell eds-g-cell-lg-4-12 eds-show-up-lg eds-l-pad-hor-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="eds-g-cell eds-g-cell--has-overflow eds-g-cell-1-12"
        data-spec="edit-list-item-more-actions-bar"
      >
        <div className="eds-text--right"></div>
      </div>
    </div>
  );
};

export default EventsListNavBar;
