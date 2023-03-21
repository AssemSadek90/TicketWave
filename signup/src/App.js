import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import { useEffect } from 'react';
import CreateAccount from './EnterEmail';
import SignIn from './SignIn';

/**
 * Renders the main application component.
 * @function
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  // function handlCallBackResponse(response) {
  //   console.log('Encoded JWT ID Token: ' + response.credential);
  // }
  // useEffect(() => {
  //   /* global google */
  //   google.accounts.id.initialize({
  //     client_id:
  //       '770303914933-s45dc140ig3djblj6rs9ckg30m58is1u.apps.googleusercontent.com',
  //     callback: handlCallBackResponse,
  //   });
  //   google.accounts.id.renderButton(document.getElementById('signInDiv'), {
  //     theme: 'outline',
  //     size: 'large',
  //   });
  // }, []);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<CreateAccount />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
