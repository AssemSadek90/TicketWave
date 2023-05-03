import React from "react";
// import axios from "axios";
import "./styles.css";
export default function EmailAttendees() {
  return (
    <section className="l-mar-top-2 g-cell g-cell-9-9 snipcss0-1-1-14 snipcss0-0-0-1 snipcss-o27Zs">
      <form
        name="MainEmailForm"
        id="MainEmailForm"
        method="post"
        className="snipcss0-2-14-15 snipcss0-1-1-2"
      >
        {/* <input type="hidden" name="email_list" id="email_list" defaultValue="" className="snipcss0-3-15-16 snipcss0-2-2-3"/>
      <input type="hidden" name="t" defaultValue="sbjk47K4t+Kx5bC1tLCx4bbltea1tbCxs7e0suO45rnf37G5uK6xtq63sK61s9+xtriyubSzs7W537G0s7i4tLWws7k=" className="snipcss0-3-15-17 snipcss0-2-2-4"/>
      <div
        className="snipcss0-3-15-18 snipcss0-2-2-5 style-XEva5"
        id="style-XEva5"
      >
        <input
          type="hidden"
          name="csrfmiddlewaretoken"
          defaultValue="160b527ac30011eda3670bb1ba538650"
          className="snipcss0-4-18-19 snipcss0-3-5-6"
        />
      </div> */}
        <section className="eds-l-mar-bot-2 snipcss0-3-15-20 snipcss0-2-2-7">
          <span id="rbSend" className="snipcss0-4-20-23 snipcss0-3-7-10"></span>
          <div className="mock-eds-tabs-wrapper snipcss0-4-20-24 snipcss0-3-7-11">
            <div className="eds-tabs snipcss0-5-24-25 snipcss0-4-11-12">
              <ul
                className="eds-tabs__navigation eds-l-pad-vert-3 eds-l-mar-bot-3 snipcss0-6-25-26 snipcss0-5-12-13"
                role="tablist"
              >
                <li
                  className="eds-tabs__item eds-l-pad-hor-2 eds-l-md-pad-hor-3 eds-l-mw-pad-hor-4 eds-l-ln-pad-hor-4 eds-l-lg-pad-hor-4 eds-l-lw-pad-hor-4 snipcss0-7-26-27 snipcss0-6-13-14"
                  role="tab"
                  aria-selected="false"
                >
                  <a
                    id="link_scheduled"
                    href="/attendees-email?filter=SCHEDULED&eid=591102953847"
                    className="eds-btn--button eds-btn--none eds-tabs__item-link eds-l-pad-vert-3 snipcss0-8-27-28 snipcss0-7-14-15"
                  >
                    Emails Scheduled
                  </a>
                </li>
                <li
                  className="eds-tabs__item eds-l-pad-hor-2 eds-l-md-pad-hor-3 eds-l-mw-pad-hor-4 eds-l-ln-pad-hor-4 eds-l-lg-pad-hor-4 eds-l-lw-pad-hor-4 eds-tabs__item--selected snipcss0-7-26-29 snipcss0-6-13-16"
                  role="tab"
                  aria-selected="true"
                  aria-controls="tabCompleted"
                >
                  <a href="google" className="eds-btn--button eds-btn--none eds-tabs__item-link eds-l-pad-vert-3 snipcss0-8-29-30 snipcss0-7-16-17">
                    Emails Sent{""}
                  </a>
                </li>
              </ul>
            </div>
            <a
              href="/attendees-email?eid=591102953847&action=CREATE"
              id="email_link"
              className="btn btn--responsive eds-l-mar-bot-3 snipcss0-5-24-31 snipcss0-4-11-18"
            >
              Create New Attendee Email
            </a>
          </div>
        </section>
        <div
          id="emailsDiv"
          className="l-mar-top-3 snipcss0-3-15-32 snipcss0-2-2-19"
          role="tabpanel"
          aria-labelledby="tabCompleted"
        >
          <style
            type="text/css"
            className="snipcss0-4-32-33 snipcss0-3-19-20"
            dangerouslySetInnerHTML={{
              __html:
                "\n        .yui-skin-sam2 .yui-button .first-child, #button_preview_cancel, #button_preview_cancel {\n          border: 0;\n        }\n        .yui-skin-sam2 .yui-button {\n          background: none;\n        }\n      "
            }}
          />
          <table
            className="js-d-table-stacked responsive-table responsive-table--stacked snipcss0-4-32-34 snipcss0-3-19-21"
            id="ticket_table"
            dorsal-guid="d75dbc47-cc02-5c04-760d-846a0ce7d54b"
            data-xd-wired="table-stacked"
          >
            <thead className="snipcss0-5-34-35 snipcss0-4-21-22">
              <tr className="snipcss0-6-35-36 snipcss0-5-22-23">
                <th className="snipcss0-7-36-37 snipcss0-6-23-24">
                  <a
                    href="/attendees-email?sort=SUBJECT&filter=COMPLETED&eid=591102953847"
                    className="snipcss0-8-37-38 snipcss0-7-24-25"
                  >
                    Subject of Email
                  </a>
                </th>
                <th className="snipcss0-7-36-39 snipcss0-6-23-26">
                  <a
                    href="/attendees-email?sort=COUNT_EMAIL&filter=COMPLETED&eid=591102953847"
                    className="snipcss0-8-39-40 snipcss0-7-26-27"
                  >
                    Recipients
                  </a>
                </th>
                <th className="snipcss0-7-36-41 snipcss0-6-23-28">
                  <a
                    href="/attendees-email?sort=SCHEDULE_DATE&filter=COMPLETED&eid=591102953847"
                    className="snipcss0-8-41-42 snipcss0-7-28-29"
                  >
                    DATE
                  </a>
                </th>
                <th className="snipcss0-7-36-43 snipcss0-6-23-30">
                  Quick Links
                </th>
              </tr>
            </thead>
            <thead className="snipcss0-5-34-44 snipcss0-4-21-31"></thead>
            <tbody className="snipcss0-5-34-45 snipcss0-4-21-32">
              <tr className="snipcss0-6-45-46 snipcss0-5-32-33">
                <td
                  id="link_subject_671941929"
                  className="snipcss0-7-46-47 snipcss0-6-33-34"
                >
                  <span className="responsive-table--stacked__header snipcss0-8-47-48 snipcss0-7-34-35">
                    Subject Of Email
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-47-49 snipcss0-7-34-36">
                    <a
                      href="#review-modal"
                      data-item={671941929}
                      className="review-modal-link js-d-modal hide-small hide-medium snipcss0-9-49-50 snipcss0-8-36-37"
                      dorsal-guid="f91482a7-e545-2299-e4e6-ccc3a8b65c5b"
                      data-xd-wired="modal"
                    >
                      Reminder for jgjghj
                    </a>
                    <a
                      href="#review-modal"
                      data-item={671941929}
                      className="review-modal-link js-d-modal hide-small hide-medium snipcss0-9-49-51 snipcss0-8-36-38"
                      dorsal-guid="e8d3a155-51c1-3630-8145-798be23be045"
                      data-xd-wired="modal"
                    >
                      <i className="ico-view-event-page snipcss0-10-51-52 snipcss0-9-38-39"></i>
                    </a>
                    <span className="hide-large snipcss0-9-49-53 snipcss0-8-36-40">
                      Reminder for jgjghj
                    </span>
                  </div>
                </td>
                <td className="snipcss0-7-46-54 snipcss0-6-33-41">
                  <span className="responsive-table--stacked__header snipcss0-8-54-55 snipcss0-7-41-42">
                    Recipients
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-54-56 snipcss0-7-41-43">
                    <nobr className="snipcss0-9-56-57 snipcss0-8-43-44">0</nobr>
                  </div>
                </td>
                <td className="snipcss0-7-46-58 snipcss0-6-33-45">
                  <span className="responsive-table--stacked__header snipcss0-8-58-59 snipcss0-7-45-46">
                    DATE
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-58-60 snipcss0-7-45-47">
                    2 days before event
                  </div>
                </td>
                <td className="snipcss0-7-46-61 snipcss0-6-33-48">
                  <span className="responsive-table--stacked__header snipcss0-8-61-62 snipcss0-7-48-49">
                    Quick Links
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-61-63 snipcss0-7-48-50">
                    <nobr className="snipcss0-9-63-64 snipcss0-8-50-51">
                      {/* <a
                        id="emails_671941929"
                        href="javascript: ProcessEmail('591102953847','671941929','SENT','COMPLETED','CREATED\u002DDESC');"
                        className="snipcss0-10-64-65 snipcss0-9-51-52"
                      >
                        Emails
                      </a> */}
                      <span className="pipe snipcss0-10-64-66 snipcss0-9-51-53">
                        |
                      </span>
                      {/* <a
                        id="delete_671941929"
                        href="javascript: ProcessEmail('591102953847','671941929','DELETE','COMPLETED','CREATED\u002DDESC');"
                        className="snipcss0-10-64-67 snipcss0-9-51-54"
                      >
                        Delete
                      </a> */}
                    </nobr>
                  </div>
                </td>
              </tr>
              <tr className="snipcss0-6-45-68 snipcss0-5-32-55">
                <td
                  id="link_subject_671941939"
                  className="snipcss0-7-68-69 snipcss0-6-55-56"
                >
                  <span className="responsive-table--stacked__header snipcss0-8-69-70 snipcss0-7-56-57">
                    Subject Of Email
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-69-71 snipcss0-7-56-58">
                    <a
                      href="#review-modal"
                      data-item={671941939}
                      className="review-modal-link js-d-modal hide-small hide-medium snipcss0-9-71-72 snipcss0-8-58-59"
                      dorsal-guid="354f4ec7-2f10-4631-4eed-6adbc8501d58"
                      data-xd-wired="modal"
                    >
                      Starting in 2 hours: jgjghj
                    </a>
                    <a
                      href="#review-modal"
                      data-item={671941939}
                      className="review-modal-link js-d-modal hide-small hide-medium snipcss0-9-71-73 snipcss0-8-58-60"
                      dorsal-guid="72da6494-3c3d-dead-b721-0d9db5cf1baf"
                      data-xd-wired="modal"
                    >
                      <i className="ico-view-event-page snipcss0-10-73-74 snipcss0-9-60-61"></i>
                    </a>
                    <span className="hide-large snipcss0-9-71-75 snipcss0-8-58-62">
                      Starting in 2 hours: jgjghj
                    </span>
                  </div>
                </td>
                <td className="snipcss0-7-68-76 snipcss0-6-55-63">
                  <span className="responsive-table--stacked__header snipcss0-8-76-77 snipcss0-7-63-64">
                    Recipients
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-76-78 snipcss0-7-63-65">
                    <nobr className="snipcss0-9-78-79 snipcss0-8-65-66">0</nobr>
                  </div>
                </td>
                <td className="snipcss0-7-68-80 snipcss0-6-55-67">
                  <span className="responsive-table--stacked__header snipcss0-8-80-81 snipcss0-7-67-68">
                    DATE
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-80-82 snipcss0-7-67-69">
                    2 hours before event
                  </div>
                </td>
                <td className="snipcss0-7-68-83 snipcss0-6-55-70">
                  <span className="responsive-table--stacked__header snipcss0-8-83-84 snipcss0-7-70-71">
                    Quick Links
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-83-85 snipcss0-7-70-72">
                    <nobr className="snipcss0-9-85-86 snipcss0-8-72-73">
                      {/* <a
                        id="emails_671941939"
                        href="javascript: ProcessEmail('591102953847','671941939','SENT','COMPLETED','CREATED\u002DDESC');"
                        className="snipcss0-10-86-87 snipcss0-9-73-74"
                      >
                        Emails
                      </a> */}
                      <span className="pipe snipcss0-10-86-88 snipcss0-9-73-75">
                        |
                      </span>
                      {/* <a
                        id="delete_671941939"
                        href="javascript: ProcessEmail('591102953847','671941939','DELETE','COMPLETED','CREATED\u002DDESC');"
                        className="snipcss0-10-86-89 snipcss0-9-73-76"
                      >
                        Delete
                      </a> */}
                    </nobr>
                  </div>
                </td>
              </tr>
              <tr className="snipcss0-6-45-90 snipcss0-5-32-77">
                <td
                  id="link_subject_671941949"
                  className="snipcss0-7-90-91 snipcss0-6-77-78"
                >
                  <span className="responsive-table--stacked__header snipcss0-8-91-92 snipcss0-7-78-79">
                    Subject Of Email
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-91-93 snipcss0-7-78-80">
                    <a
                      href="#review-modal"
                      data-item={671941949}
                      className="review-modal-link js-d-modal hide-small hide-medium snipcss0-9-93-94 snipcss0-8-80-81"
                      dorsal-guid="56cd63fe-d49b-cfcc-e619-d1550d1ec955"
                      data-xd-wired="modal"
                    >
                      Starting Now! jgjghj
                    </a>
                    <a
                      href="#review-modal"
                      data-item={671941949}
                      className="review-modal-link js-d-modal hide-small hide-medium snipcss0-9-93-95 snipcss0-8-80-82"
                      dorsal-guid="51222f3a-c24e-5381-3cc1-a34134b764fd"
                      data-xd-wired="modal"
                    >
                      <i className="ico-view-event-page snipcss0-10-95-96 snipcss0-9-82-83"></i>
                    </a>
                    <span className="hide-large snipcss0-9-93-97 snipcss0-8-80-84">
                      Starting Now! jgjghj
                    </span>
                  </div>
                </td>
                <td className="snipcss0-7-90-98 snipcss0-6-77-85">
                  <span className="responsive-table--stacked__header snipcss0-8-98-99 snipcss0-7-85-86">
                    Recipients
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-98-100 snipcss0-7-85-87">
                    <nobr className="snipcss0-9-100-101 snipcss0-8-87-88">
                      0
                    </nobr>
                  </div>
                </td>
                <td className="snipcss0-7-90-102 snipcss0-6-77-89">
                  <span className="responsive-table--stacked__header snipcss0-8-102-103 snipcss0-7-89-90">
                    DATE
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-102-104 snipcss0-7-89-91">
                    10 minutes before event
                  </div>
                </td>
                <td className="snipcss0-7-90-105 snipcss0-6-77-92">
                  <span className="responsive-table--stacked__header snipcss0-8-105-106 snipcss0-7-92-93">
                    Quick Links
                  </span>
                  <div className="responsive-table--stacked__content snipcss0-8-105-107 snipcss0-7-92-94">
                    <nobr className="snipcss0-9-107-108 snipcss0-8-94-95">
                      {/* <a
                        id="emails_671941949"
                        href="javascript: ProcessEmail('591102953847','671941949','SENT','COMPLETED','CREATED\u002DDESC');"
                        className="snipcss0-10-108-109 snipcss0-9-95-96"
                      >
                        Emails
                      </a> */}
                      <span className="pipe snipcss0-10-108-110 snipcss0-9-95-97">
                        |
                      </span>
                      {/* <a
                        id="delete_671941949"
                        href="javascript: ProcessEmail('591102953847','671941949','DELETE','COMPLETED','CREATED\u002DDESC');"
                        className="snipcss0-10-108-111 snipcss0-9-95-98"
                      >
                        Delete
                      </a> */}
                    </nobr>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div
            id="review-modal"
            className="hide-small hide-medium g-cell g-cell--no-gutters g-cell-12-12 g-cell-md-8-12 mfp-hide snipcss0-4-32-112 snipcss0-3-19-99"
          >
            <h3 className="modal__heading snipcss0-5-112-113 snipcss0-4-99-100">
              Review of the message sent
            </h3>
            <div
              id="preview_bd"
              className="bd snipcss0-5-112-114 snipcss0-4-99-101"
            >
              <div
                id="preview_dialog_html"
                className="snipcss0-6-114-115 snipcss0-5-101-102"
              ></div>
              <div className="modal__body l-align-center snipcss0-6-114-116 snipcss0-5-101-103">
                <div
                  id="preview-dialogue"
                  className="snipcss0-7-116-117 snipcss0-6-103-104"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  );
}
