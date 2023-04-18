import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SignIn from '../SignIn.js';
const MockAdapter = require('axios-mock-adapter');
const axios = require('axios');
describe('SignIn component', () => {
  let mock;

  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  afterEach(() => {
    mock.reset();
  });

  afterAll(() => {
    mock.restore();
  });

  it('renders without crashing', () => {
    render(<SignIn />);
  });

  it('disables the submit button while loading', () => {
    render(<SignIn isLoading={true} />);
    expect(screen.getByRole('button', { name: 'Sign In' })).toBeDisabled();
  });

  it('calls the handleEmailChange function when the email input changes', () => {
    const handleEmailChangeMock = jest.fn();
    render(<SignIn handleEmailChange={handleEmailChangeMock} />);
    fireEvent.change(screen.getByLabelText('Email'), {
      target: { value: 'test@test.com' },
    });
    expect(handleEmailChangeMock).toHaveBeenCalled();
  });

  it('calls the handlePasswordChange function when the password input changes', () => {
    const handlePasswordChangeMock = jest.fn();
    render(<SignIn handlePasswordChange={handlePasswordChangeMock} />);
    fireEvent.change(screen.getByLabelText('Password'), {
      target: { value: 'password' },
    });
    expect(handlePasswordChangeMock).toHaveBeenCalled();
  });

  it('calls the submitForm function when the form is submitted', async () => {
    const submitFormMock = jest.fn();
    mock.onPost('/api/signin').reply(200, { success: true });
    render(<SignIn submitForm={submitFormMock} />);
    fireEvent.submit(screen.getByTestId('signin-form'));
    await screen.findByText('Signing in...');
    expect(submitFormMock).toHaveBeenCalled();
  });

  it('shows an error message when the email is invalid', () => {
    render(<SignIn signInClicked={true} validEmail={false} />);
    expect(
      screen.getByText('Please enter a valid email address')
    ).toBeInTheDocument();
  });

  it('shows an error message when the password is too short', () => {
    render(<SignIn signInClicked={true} password="abc" />);
    expect(
      screen.getByText('Please enter a password over 6 characters.')
    ).toBeInTheDocument();
  });

  it('shows an error message when the email or password is invalid', () => {
    render(<SignIn invalidFields={true} />);
    expect(screen.getByText('Invalid email or password')).toBeInTheDocument();
  });

  it('shows an error message when the user does not exist and forgot password is clicked', () => {
    render(<SignIn forgotPasswordClicked={true} userExists={false} />);
    expect(screen.getByText('Invalid email address.')).toBeInTheDocument();
  });
});
