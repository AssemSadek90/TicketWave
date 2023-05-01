import React from 'react';
import { render, screen } from '@testing-library/react';
import EventImage from '../image.jsx';
import { expect } from '@jest/globals';
import { toHaveAttribute } from '@testing-library/jest-dom';

expect.extend({ toHaveAttribute });
describe('EventImage', () => {
  it('renders the event logo', () => {
    const event = { logo: 'https://example.com/logo.png' };
    render(<EventImage Event_id={event} />);
    const imageElement = screen.getByAltText('');
    expect(imageElement).toHaveAttribute('src', event.logo);
  });
});
