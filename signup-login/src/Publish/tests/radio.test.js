import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import RadioApp from '../radio1';
import '@testing-library/jest-dom';

describe.skip('RadioApp', () => {
  test('renders RadioApp component', () => {
    render(<RadioApp />);
    const linkElement = screen.getByText(/Who can see your event?/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('selects Publish-Now radio button by default', () => {
    render(<RadioApp />);
    const publishNowRadioButton = screen.getByLabelText(/Publish Now/i);
    expect(publishNowRadioButton).toBeChecked();
  });

  test('shows schedule date/time options when Scheduled radio button is selected', async () => {
    render(<RadioApp />);
    const scheduledRadioButton = screen.getByLabelText(/Schedule for later/i);
    fireEvent.click(scheduledRadioButton);

    await waitFor(() => {
      const datePicker = screen.getByLabelText(/select date/i);
      //   const timePicker = screen.getByLabelText(/selectedTime/i);
      expect(datePicker).toBeInTheDocument();
      //   expect(timePicker).toBeInTheDocument();
    });
  });

  test('shows audience options when private radio button is selected', async () => {
    render(<RadioApp />);
    const privateRadioButton = screen.getByLabelText(/private/i);
    fireEvent.click(privateRadioButton);

    await waitFor(() => {
      const audienceDropdown = screen.getByLabelText(/Choose your Audience/i);
      expect(audienceDropdown).toBeInTheDocument();
    });
  });

  test('submits data when date and time are selected', async () => {
    render(<RadioApp />);
    const scheduledRadioButton = screen.getByLabelText(/Schedule for later/i);
    fireEvent.click(scheduledRadioButton);

    await waitFor(() => {
      const datePicker = screen.getByLabelText(/select date/i);
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.change(datePicker, { target: { value: '2023-03-23' } });

      const timePicker = screen.getByLabelText(/SelectedTime/i);
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.change(timePicker, { target: { value: '13:30' } });

      const submitButton = screen.getByText(/Submit/i);
      // eslint-disable-next-line testing-library/no-wait-for-side-effects
      fireEvent.click(submitButton);

      // assert that the submitted data is displayed correctly
      const selectedDateTime = screen.getByText(/Selected date and time:/i);
      expect(selectedDateTime).toHaveTextContent('2023-03-23 13:30');
    });
  });
});
