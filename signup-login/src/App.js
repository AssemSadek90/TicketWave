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
          <Route path="/terms" element={<Terms />} />
          <Route path="/publish" element={<PublishApp />} />
          <Route path="/basic-info" element={<CreateEventForm />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
