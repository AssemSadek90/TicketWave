import React from 'react';
import { render, screen } from '@testing-library/react';
import EventImage from '../image';

/**
 * Tests the EventImage component.
 */
describe.skip('EventImage', () => {
  /**
   * Tests that the EventImage component is rendered correctly when a logo is provided.
   */
  xit('should render the EventImage component', () => {
    const event_id = {
      logo: 'https://example.com/event-logo.png',
    };

    render(<EventImage event_id={event_id} />);

    expect(
      screen.getByTestId('event-preview-card__image-container')
    ).toBeTruthy();
    expect(screen.getByTestId('imgEvent')).toBeTruthy();
    // eslint-disable-next-line testing-library/prefer-presence-queries
    expect(screen.queryByAltText('Event Logo')).toBeTruthy();
  });

  /**
   * Tests that a placeholder image is rendered when no logo is provided.
   */
  xit('should render a placeholder image if no logo is provided', () => {
    const event_id = {
      logo: '',
    };

    render(<EventImage event_id={event_id} />);

    expect(
      screen.getByTestId('event-preview-card__image-container')
    ).toBeTruthy();
    expect(screen.queryByAltText('Event Logo')).toBeFalsy();
    expect(
      screen.getByTestId('event-preview-card__image-placeholder')
    ).toBeTruthy();
  });
});
