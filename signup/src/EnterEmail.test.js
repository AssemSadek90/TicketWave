import { render, screen, fireEvent } from '@testing-library/react';
import CreateAccount from './EnterEmail.js';

describe('CreateAccount component', () => {
  test('renders the component', () => {
    render(<CreateAccount />);
    const linkElement = screen.getByText(/create an account/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('validateEmail returns true for valid email', () => {
    const email = 'test@test.com';
    expect(CreateAccount.validateEmail(email)).toBe(true);
  });

  test('validateEmail returns false for invalid email', () => {
    const email = 'invalidemail';
    expect(CreateAccount.validateEmail(email)).toBe(false);
  });

  //   test('eraseFields resets input fields', () => {
  //     render(<CreateAccount />);
  //     fireEvent.change(getByLabelText(/first name/i), { target: { value: 'John' } });
  //     fireEvent.change(getByLabelText(/last name/i), { target: { value: 'Doe' } });
  //     fireEvent.change(getByLabelText(/password/i), { target: { value: '123456' } });
  //     fireEvent.change(getByLabelText(/confirm email/i), { target: { value: 'test@test.com' } });
  //     expect(getByLabelText(/first name/i)).toHaveValue('John');
  //     expect(getByLabelText(/last name/i)).toHaveValue('Doe');
  //     expect(getByLabelText(/password/i)).toHaveValue('123456');
  //     expect(getByLabelText(/confirm email/i)).toHaveValue('test@test.com');
  //     CreateAccount.eraseFields();
  //     expect(getByLabelText(/first name/i)).toHaveValue('');
  //     expect(getByLabelText(/last name/i)).toHaveValue('');
  //     expect(getByLabelText(/password/i)).toHaveValue('');
  //     expect(getByLabelText(/confirm email/i)).toHaveValue('');
  //   });

  test('handleContinueButtonClick sets userExists to true when user exists', async () => {
    render(<CreateAccount />);
    const emailInput = screen.getByLabelText(/email/i);
    const continueButton = screen.getByText(/continue/i);
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.click(continueButton);
    expect(await screen.findByText(/user already exists/i)).toBeInTheDocument();
  });

  test('handleContinueButtonClick sets userExists to false when user does not exist', async () => {
    render(<CreateAccount />);
    const emailInput = screen.getByLabelText(/email/i);
    const continueButton = screen.getByText(/continue/i);
    fireEvent.change(emailInput, {
      target: { value: 'nonexistinguser@test.com' },
    });
    fireEvent.click(continueButton);
    expect(await screen.findByText(/create an account/i)).toBeInTheDocument();
  });
});
