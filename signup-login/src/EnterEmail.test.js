import { render, screen } from '@testing-library/react';
import CreateAccount from './EnterEmail.js';
import axios from 'axios';
jest.mock('axios');

const users = [
  {
    email: 'test@test.com',
    firstName: 'John',
    lastName: 'Doe',
    password: '123456',
    id: 1,
  },
];

describe('CreateAccount component', () => {
  test('validateEmail returns true for valid email', () => {
    const email = 'test@test.com';
    expect(CreateAccount.validateEmail(email)).toBe(true);
  });

  test('validateEmail returns false for invalid email', () => {
    const email = 'badformat';
    expect(CreateAccount.validateEmail(email)).toBe(false);
  });
});
