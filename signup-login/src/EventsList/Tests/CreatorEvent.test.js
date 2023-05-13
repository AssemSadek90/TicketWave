import { render } from '@testing-library/react';
import CreatorEvent from '../CreatorEvent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
test('renders creators events without crashing', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/Events" element={<CreatorEvent />} />
      </Routes>
    </BrowserRouter>
  );
});
