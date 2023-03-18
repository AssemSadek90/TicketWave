import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Renders the root component of the application.
 * @function
 * @returns {void}
 */
function render() {
  root.render(
    //<React.StrictMode>
    <App />
    //</React.StrictMode>
  );
}

// Call the render function to render the application
render();
