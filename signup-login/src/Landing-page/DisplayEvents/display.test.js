import React from 'react';
import DisplayEvents from './Displayevents';
import { render, screen } from '@testing-library/react';
import Home from '../Landing';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import EventItem from './EventItem';

test('renders sign in without crashing', async () => {
  render(
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
});

test('renders without events', () => {
  const eventsData = [];
  render(<DisplayEvents eventsData={eventsData} />);
});

describe('EventItem', () => {
  const event = {
    id: 1,
    name: 'Test Event',
    start: '2023-05-20T18:00:00.000Z',
    url: 'https://example.com/test-event.jpg',
    organizer: 'Test Organizer',
    description: 'This is a test event description.',
  };

  it('displays the event name', () => {
    render(
      <BrowserRouter>
        <EventItem event={event} />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Event')).toBeInTheDocument();
  });

  xit('displays the event start date', () => {
    render(
      <BrowserRouter>
        <EventItem event={event} />
      </BrowserRouter>
    );
    expect(
      screen.getByText('May 20 · 6:00 pm', { exact: false })
    ).toBeInTheDocument();
  });

  it('displays the event organizer', () => {
    render(
      <BrowserRouter>
        <EventItem event={event} />
      </BrowserRouter>
    );
    expect(screen.getByText('Test Organizer')).toBeInTheDocument();
  });

  xit('displays the event description', () => {
    render(
      <BrowserRouter>
        <EventItem event={event} />
      </BrowserRouter>
    );
    expect(
      screen.getByText('This is a test event description.')
    ).toBeInTheDocument();
  });

  xit('navigates to the event details page when clicked', () => {
    const navigate = jest.fn();
    Object.defineProperty(window, 'localStorage', {
      value: {
        setItem: jest.fn(),
      },
      writable: true,
    });
    render(
      <BrowserRouter>
        <EventItem event={event} />
      </BrowserRouter>
    );
    userEvent.click(screen.getByRole('link'));
    expect(window.localStorage.setItem).toHaveBeenCalledWith('eventId', '1');
    expect(navigate).toHaveBeenCalledWith('/event-details/1');
  });
});
