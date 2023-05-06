import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import './App.css';
import ProtectedRoutes from './Authorization/ProtectedRoutes';
import CreateAccount from './Log-in/EnterEmail';
import SignIn from './Log-in/SignIn';
import Home from './Landing-page/Landing';
import EventDetails from './EventDetails/EventDetailsPage';
import CreateEventForm from './Basic-info/CreateEventForm';
import PublishApp from './Publish/PublishApp';
import Terms from './Log-in/TermsConditions/Terms';
import ChangePassword from './Log-in/ChangePassword';
import Dashboard from './Dashboard/dashboardinsights';
import Tickets from './Tickets/Tickets';
import NANavbar from './NavBar/NANavbar';
import Search from './Search/Search';

/**
 * Renders the main application component.
 * @function
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutes>
                <Dashboard />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/change-password"
            element={
              <ProtectedRoutes>
                <ChangePassword />
              </ProtectedRoutes>
            }
          />
          <Route path="/terms" element={<Terms />} />
          <Route
            path="/publish"
            element={
              <ProtectedRoutes>
                <PublishApp />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/basic-info"
            element={
              <ProtectedRoutes>
                <CreateEventForm />
              </ProtectedRoutes>
            }
          />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/Navigation/*" element={<Tickets />} />
          <Route path="/test" element={<NANavbar />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
