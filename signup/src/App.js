import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { useEffect } from 'react';
import CreateAccount from './EnterEmail';
import SignIn from './SignIn';
import Home from './Landing';
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
          <Route path="/" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
