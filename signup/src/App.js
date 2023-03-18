import './App.css';
import React from 'react';
import CreateAccount from './EnterEmail';

/**
 * Renders the main application component.
 * @function
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <div className="App">
      <CreateAccount />
    </div>
  );
}

export default App;
