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
});
