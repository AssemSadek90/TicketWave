import React from 'react';
import { render, screen } from '@testing-library/react';
import { Navigate } from 'react-router-dom';
import ProtectedRoutes from '../ProtectedRoutes';
import { isValidSession } from '../../Credentials/Credentials';
import { BrowserRouter, Routes, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
jest.mock('../../Credentials/Credentials', () => ({
  __esModule: true,
  isValidSession: jest.fn(),
}));

/**
 * Testing the ProtectedRoutes component.
 */

describe('ProtectedRoutes', () => {
  let history;
  beforeEach(() => {
    jest.clearAllMocks();
    history = createMemoryHistory({ initialEntries: ['/'] });
  });

  /**
   * Test case: should render children if user is authenticated.
   */

  it('should render children if user is authenticated', () => {
    isValidSession.mockReturnValue(true);

    render(
      <ProtectedRoutes>
        <div>Protected content</div>
      </ProtectedRoutes>
    );

    expect(screen.getByText('Protected content')).toBeInTheDocument();
    expect(screen.queryByRole('navigation')).toBeNull();
    expect(isValidSession).toHaveBeenCalled();
  });

  /**
   * Test case: should redirect to /signin children if user is not authenticated.
   */

  xit('should redirect to "/signin" if user is not authenticated', () => {
    isValidSession.mockReturnValue(false);

    render(
      <Router history={history}>
        <ProtectedRoutes>
          <Navigate to="/signin" replace />
        </ProtectedRoutes>
      </Router>
    );

    expect(screen.queryByText('Protected content')).toBeNull();
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByRole('navigation')).toHaveAttribute('to', '/signin');
    expect(screen.getByRole('navigation')).toHaveAttribute('replace');
    expect(isValidSession).toHaveBeenCalled();
  });
});
