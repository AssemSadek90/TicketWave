import { render } from '@testing-library/react';
import ChangePassword from '../ChangePassword.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
/**
 * Renders the ChangePassword component without crashing.
 * @returns {void}
 */
test('renders creators events without crashing', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/Events" element={<ChangePassword />} />
      </Routes>
    </BrowserRouter>
  );
});
