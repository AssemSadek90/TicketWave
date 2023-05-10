import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavPage from './components/NavPage';
import AdmissionPage from './components/AdmissionPage';
import PromoMain from './promoPage/PromoMain';
import Sidebar from './Sidebar/Sidebar';
import { useLocation } from 'react-router-dom';
import './Tickets.css';
import AddAttendees from './AddAttendees/AddAttendees';
import SoldTickets from './SoldTickets/SoldTickets';
import SoldTicketsMain from './SoldTickets/SoldTicketsMain';
import EventDetails from '../EventDetails/EventDetails';
import CreatorEvent from '../EventsList/CreatorEvent';

// import Dashboard from "./Dashboard/Dashboard";
import Dashboard from '../Dashboard/dashboardinsights';
import CreateEventForm from '../Basic-info/CreateEventForm';
import ONavbar from '../NavBar/OrganizationNav/ONavbar';
import Publish from '../Publish/publish-preview';
import PublishApp from '../Publish/PublishApp';

/** Represents a component for managing tickets and sold tickets.
@constructor
@param {Object} props - The props object containing the ticket data.
@param {Array} props.finalTicketData - An array of objects containing the final ticket data.
@param {Array} props.finalSoldTicketData - An array of objects containing the final sold ticket data.
@param {Array} props.finalTickets - An array of objects containing the final tickets.
@param {Array} props.finalSoldTickets - An array of objects containing the final sold tickets.
*/
function Tickets({
  finalTicketData,
  finalSoldTicketData,
  finalTickets,
  finalSoldTickets,
}) {
  /** State hook for the promotional data.
@type {[Array, function]}
*/
  const [promoData, setPromoData] = useState([]);
  /** State hook for the ticket capacity.
@type {[null, function]}
*/
  const [capacity, setCapacity] = useState(null);
  /** State hook for the padding value.
@type {[string, function]}
*/
  const [padding, setPadding] = useState('5rem');
  /** State hook for the visibility of a component.
@type {[boolean, function]}
*/
  const [visible, setVisible] = useState(true);
  /** State hook for the second sidebar display.
@type {[boolean, function]}
*/
  const [showSecondSidebar, setShowSecondSidebar] = useState(true);
  /** State hook for the submission status.
@type {[string, function]}
*/
  const [submitted, setSubmitted] = useState('Not Submitted');

  // _________________________________________________ THESE TWO ARE FOR THE BACKEND CURRENTLY ______________________________________________________

  /** State hook for the ticket data.
@type {[Array, function]}
*/
  const [ticketData, setTicketData] = useState(finalTickets);
  /** State hook for the sold ticket data.
@type {[Array, function]}
*/
  const [soldTicketData, setSoldTicketData] = useState(finalSoldTickets);

  // __________________________________________________________________________________________________________________________________________________

  /** useEffect hook for updating the final ticket data.
@function
@param {function} finalTicketData - The function to update the final ticket data.
@param {Array} ticketData - The current ticket data.
@returns {undefined}
*/
  useEffect(() => {
    finalTicketData(ticketData);
  }, [ticketData]);

  /** useEffect hook for updating the final sold ticket data.
@function
@param {function} finalSoldTicketData - The function to update the final sold ticket data.
@param {Array} soldTicketData - The current sold ticket data.
@returns {undefined}
*/
  useEffect(() => {
    finalSoldTicketData(soldTicketData);
  }, [soldTicketData]);

  /** useEffect hook for updating the sold ticket data.
@function
@param {Array} ticketData - The current ticket data.
@param {Array} soldTicketData - The current sold ticket data.
@returns {undefined}
*/
  useEffect(() => {
    setSoldTicketData((prevSoldTickets) =>
      ticketData.map((obj) => {
        const prevSoldTicket = prevSoldTickets.find(
          (ticket) => ticket.id === obj.id
        );
        const prevSoldQuantity = prevSoldTicket
          ? prevSoldTicket.soldTickets
          : 0;
        return {
          ...obj,
          soldTickets: obj.chosenQuantity + prevSoldQuantity,
        };
      })
    );
  }, [ticketData]);

  /** Function to handle ticket data and capacity updates.
@function
@param {Array} e - The new ticket data.
@param {number} a - The new capacity.
@returns {undefined}
*/
  function TicketHandler(e, a) {
    setTicketData(e);
    setCapacity(a);
    // console.log(e);
  }

  /** Function to handle promo data updates.
@function
@param {Array} b - The new promo data.
@returns {undefined}
*/
  function promoHandler(b) {
    setPromoData(b);
    // console.log(b);
  }

  /** Function to add attendee data and update sold ticket data and ticket data.
@function
@param {Array} e - The new attendee data.
@returns {undefined}
*/
  function addAttendeeData(e) {
    setSoldTicketData((prevSoldTickets) =>
      ticketData.map((obj) => {
        const prevSoldTicket = prevSoldTickets.find(
          (ticket) => ticket.id === obj.id
        );
        const prevSoldQuantity = prevSoldTicket
          ? prevSoldTicket.soldTickets
          : 0;
        return {
          ...obj,
          soldTickets: obj.chosenQuantity + prevSoldQuantity,
        };
      })
    );

    setTicketData(e);
    // console.log("ADDED")
  }

  /** Function to handle form submission and log ticket data, promo data, and capacity.
@function
@returns {undefined}
*/
  function submitHandler() {
    console.log('Ticket Data', ticketData);
    console.log('Promo Data', promoData);
    console.log('Capacity', capacity);

    const data = {
      TicketData: ticketData,
      PromoData: promoData,
      Capacity: capacity,
    };
    // handleSignUp(data);
  }

  // const handleSignUp = (data) => {
  //   const requestOptions = {
  //     headers: { 'Content-Type': 'application/json' },
  //   };

  //   server
  //     .post('/Events', data, requestOptions)
  //     .then((response) => console.log(response.data))
  //     .catch((error) => console.log(error));
  // };

  /** Effect hook to scroll to the top of the window on component mount.
@function
@returns {undefined}
*/
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    // <BrowserRouter>
    /** Renders the main application layout with various routes and components.
     * @component
     * @return {JSX.Element}
     */
    <React.Fragment>
      <Sidebar showSecond={showSecondSidebar} visible={visible} />
      <div style={{ paddingLeft: padding }}>
        <Routes>
          <Route
            path="/publish"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div style={{}}>
                    <PublishApp />
                  </div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Events"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div style={{}}>
                    <CreatorEvent />
                  </div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/home-orders"
            Component={() => {
              setPadding('5rem');
              setVisible(true);
              setShowSecondSidebar(false);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div></div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/home-marketing"
            Component={() => {
              setPadding('5rem');
              setVisible(true);
              setShowSecondSidebar(false);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div></div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/home-reports"
            Component={() => {
              setPadding('5rem');
              setVisible(true);
              setShowSecondSidebar(false);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div></div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/home-finance"
            Component={() => {
              setPadding('5rem');
              setVisible(true);
              setShowSecondSidebar(false);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div></div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/home-settings"
            Component={() => {
              setPadding('5rem');
              setVisible(true);
              setShowSecondSidebar(false);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div></div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/home-app-Marketplace"
            Component={() => {
              setPadding('5rem');
              setVisible(true);
              setShowSecondSidebar(false);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div></div>
                </React.Fragment>
              );
            }}
          />

          {/* ____________________________________________________ YOUR MENTIONED PAGES_______________________________________________________________ */}

          <Route
            path="/dashboard"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div style={{ paddingBottom: '1rem' }}>
                    <Dashboard
                      soldTicketData={soldTicketData}
                      ticketData={ticketData}
                    />
                  </div>
                </React.Fragment>
              );
            }}
          />

          {/* _________________________________________________________________________________________________________________________________________ */}

          <Route
            path="/details"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div>Details Page</div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Order-Options"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div>Order Options Page</div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Payments-and-Tax"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div>Payments and Tax Page</div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Marketing"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div>Marketing Page</div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Tickets/admission"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div
                    style={{
                      paddingTop: '1rem',
                      paddingRight: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <NavPage />
                    <AdmissionPage
                      soldTicketData={soldTicketData}
                      finalCapacity={capacity}
                      finalData={ticketData}
                      Ticket={TicketHandler}
                      finalSubmission={submitHandler}
                    />
                  </div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/Tickets/add-ons"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div
                    style={{
                      paddingTop: '1rem',
                      paddingRight: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <NavPage />
                    <div></div>
                  </div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/Tickets/promo-codes"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div
                    style={{
                      paddingTop: '1rem',
                      paddingRight: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <NavPage />
                    <PromoMain finalData={promoData} Promo={promoHandler} />
                  </div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/Tickets/holds"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div
                    style={{
                      paddingTop: '1rem',
                      paddingRight: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <NavPage />
                    <div></div>
                  </div>
                </React.Fragment>
              );
            }}
          />
          <Route
            path="/Tickets/event-settings"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div
                    style={{
                      paddingTop: '1rem',
                      paddingRight: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <NavPage />
                    <div></div>
                  </div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Add-Attendees"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div
                    style={{
                      paddingTop: '1rem',
                      paddingRight: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <AddAttendees
                      submitted={submitted}
                      soldTickets={soldTicketData}
                      finalData={ticketData}
                      addAttendee={addAttendeeData}
                    />
                  </div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Sold-Tickets"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div
                    style={{
                      paddingTop: '1rem',
                      paddingRight: '1rem',
                      paddingBottom: '1rem',
                    }}
                  >
                    <SoldTicketsMain data={soldTicketData} />
                  </div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Orders"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div> Orders Page</div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Attendee-Credits"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div> Attendee-Credits</div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Attendee-List"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div> Attendee-List</div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/Check-in"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              return (
                <React.Fragment>
                  <ONavbar />
                  <div> Check in</div>
                </React.Fragment>
              );
            }}
          />
        </Routes>
      </div>
    </React.Fragment>
    // </BrowserRouter>
  );
}

export default Tickets;
