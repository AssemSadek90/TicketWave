import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// // Initialize Google Sign-In
// window.gapi.load('auth2', () => {
//   window.gapi.auth2.init({
//     client_id:
//       '770303914933-s45dc140ig3djblj6rs9ckg30m58is1u.apps.googleusercontent.com',
//   });
// });
import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Renders the root component of the application.
 * @function
 * @returns {void}
 */
function render() {
  root.render(
    //<React.StrictMode>
    <GoogleOAuthProvider clientId="770303914933-s45dc140ig3djblj6rs9ckg30m58is1u.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
    //</React.StrictMode>
  );
}

// Call the render function to render the application
render();
