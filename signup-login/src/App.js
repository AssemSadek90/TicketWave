import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
import CreateAccount from './Log-in/EnterEmail';
import SignIn from './Log-in/SignIn';
import Home from './Landing-page/Landing';
import Navbar from './NavBar/Navbar';
import EventDetails from './EventDetails/EventDetailsPage';
import CreateEventForm from './Basic-info/CreateEventForm';
import PublishApp from './Publish/PublishApp';
import Terms from './Log-in/TermsConditions/Terms';
import ChangePassword from './Log-in/ChangePassword';
import Tickets from './Tickets/Tickets';
import Sidebar from './Tickets/Sidebar/Sidebar';
import { useState } from 'react';
import CreatorEvent from './EventsList/CreatorEvent';
/**
 * Renders the main application component.
 * @function
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  const [padding, setPadding] = useState('5rem');
  const [visible, setVisible] = useState(true);
  const [showSecondSidebar, setShowSecondSidebar] = useState(false);

  const [myfinalTicketData, setFinalTicketData] = useState([]);
  const [myfinalSoldTicketData, setFinalSoldTicketData] = useState([]);

  function finalSoldTicketData(e) {
    setFinalSoldTicketData(e);
  }

  function finalTicketData(e) {
    setFinalTicketData(e);
  }

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/creator" element={<CreatorEvent />}></Route>
          <Route
            path="/home"
            Component={() => {
              return (
                <React.Fragment>
                  <Home />
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/basic-info"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <Sidebar showSecond={showSecondSidebar} visible={visible} />
                  <div style={{ paddingLeft: padding, paddingBottom: '1rem' }}>
                    <CreateEventForm />
                  </div>
                </React.Fragment>
              );
            }}
          />

          <Route
            path="/publish"
            Component={() => {
              setPadding('18rem');
              setVisible(true);
              setShowSecondSidebar(true);
              return (
                <React.Fragment>
                  <Sidebar showSecond={showSecondSidebar} visible={visible} />
                  <div style={{ paddingLeft: padding }}>
                    <div
                      style={{
                        paddingTop: '1rem',
                        paddingRight: '1rem',
                        paddingBottom: '1rem',
                      }}
                    >
                      <PublishApp />
                    </div>
                  </div>
                </React.Fragment>
              );
            }}
          />

          <Route path="/event-details/:eventId" element={<EventDetails />} />
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/publish" element={<PublishApp />} />
          {/* <Route path="/basic-info" element={<CreateEventForm />} /> */}

          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/*"
            element={
              <Tickets
                finalTickets={myfinalTicketData}
                finalSoldTickets={myfinalSoldTicketData}
                finalSoldTicketData={finalSoldTicketData}
                finalTicketData={finalTicketData}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
