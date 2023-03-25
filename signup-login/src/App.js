import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateAccount from './EnterEmail';
import SignIn from './SignIn';
import Home from './Landing';
import Navbar from './NavBar/Navbar';
import EventDetails from './EventDetailsPage';
import CreateEventForm from './CreateEventForm';
import PublishApp from './publish-components/PublishApp';

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
