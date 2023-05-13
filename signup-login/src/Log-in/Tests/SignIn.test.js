import { render } from '@testing-library/react';
import SignIn from '../SignIn.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/**
 * Renders the SignIn component without crashing.
 * @returns {void}
 */
test('renders sign in without crashing', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
});
