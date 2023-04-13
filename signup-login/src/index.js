import React from 'react';
import ReactDOM from 'react-dom/client';
//import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App';


//import { GoogleOAuthProvider } from '@react-oauth/google';

const root = ReactDOM.createRoot(document.getElementById('root'));

/**
 * Renders the root component of the application.
 * @function
 * @returns {void}
 */
function render() {
  root.render(
    //<React.StrictMode>
    // <GoogleOAuthProvider clientId="770303914933-s45dc140ig3djblj6rs9ckg30m58is1u.apps.googleusercontent.com">
    // </GoogleOAuthProvider>
    <App />
    //</React.StrictMode>
  );
}

render();
