import React from 'react';
import { render } from '@testing-library/react';
import PublishApp from '../PublishApp';

/**
 * Tests the PublishApp component.
 */
describe.skip('PublishApp', () => {
  /**
   * Tests that the Publish component is rendered correctly.
   */
  xit('should render the Publish component', () => {
    // Render the component
    const { getByText } = render(<PublishApp />);

    // Check if the Publish component is rendered
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const publishElement = getByText('Publish Your Event');
    expect(publishElement).toBeInTheDocument();
  });
});
