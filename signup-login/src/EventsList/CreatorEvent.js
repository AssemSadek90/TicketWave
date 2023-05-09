import { useEffect, useState, React } from 'react';
import { CSVLink } from 'react-csv';
import DisplayEvents from './DisplayCreatorEvents';
import EventsListNavBar from './EventsListNavBar';
import SecondNav from './SecondNav';
import './EventsList.css';
import server from '../server';

const CreatorEvent = () => {
  /**
   * User ID of the creator.
   * @type {string}
   */
  const userID = localStorage.getItem('userID');

  /**
   * State variable for storing the events.
   * @type {Array}
   */
  const [events, setEvents] = useState([]);

  /**
   * State variable for storing the number of tickets sold.
   * @type {Array}
   */
  const [ticketsSold, setTicketsSold] = useState([]);

  /**
   * Fetches the list of events and the number of tickets sold for each event.
   * @function
   * @name useEffect
   * @memberof CreatorEvent
   * @inner
   * @param {Array} [] - An empty dependency array, meaning the effect runs only once after the initial render.
   * @returns {void}
   */
  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken');
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };

    server
      .get(`/events/list/?owner=${userID}`, requestOptions)
      .then((response) => {
        console.log(response);
        const data = response.data.results;
        if (data) {
          setEvents(data);
        }
        console.log(data);

        // data.forEach((event) => {
        //   server
        //     .get(`/events/amount_of_tickets_sold/${event.id}`, requestOptions)
        //     .then((response) => {
        //       console.log(response);
        //       const ticketsSold = response.data; // Get the ticket sold information for the current event
        //       setEvents((prevEvents) =>
        //         prevEvents.map((prevEvent) => {
        //           if (prevEvent.id === event.id) {
        //             return { ...prevEvent, ticketsSold };
        //           }
        //           return prevEvent;
        //         })
        //       );
        //     })
        //     .catch((error) => console.log(error));
        // });
      })
      .then(() => {
        setEvents(updatedEvents);
        console.log(updatedEvents);
        console.log(events);
      })
      .catch((error) => console.log(error));
  }, []);

  const updatedEvents = events.map((event) => {
    const { capacity, price } = event; // Extract capacity and price from event object
    const gross = capacity * price; // Calculate the gross property

    return { ...event, gross }; // Return a new object with the updated gross property
  });

  /**
   * Maps the events data to the desired format.
   * @type {Array}
   */
  const EventsData = events.map((event) => ({
    Event: event.name,
    Date: new Date(event.start),
    Status: event.status,
    'Tickets Sold': event.ticketsSold,
    'Tickets Available': event.capacity - event.ticketsSold,
  }));

  return (
    <>
      <div className="creator-events-view">
        <p className="eds-text-hm__title snipcss0-0-0-1 snipcss-vBV7a">
          Events
        </p>
        <SecondNav />
        <EventsListNavBar />
        <DisplayEvents eventsData={events} />
      </div>
      <footer
        className="creator-events-view eds-align--space-between eds-align--center eds-l-mar-top-10 snipcss-oBft8"
        data-spec="events-screen-list-footer-links"
      >
        <CSVLink
          id="csvlink"
          data={EventsData}
          filename="Events.csv"
          href="/myevents/events?fmt=csv&amp;org=-1"
          rel="noopener noreferrer"
          target="_blank"
          data-spec="events-screen-csv-link"
        >
          <i
            className="eds-vector-image eds-icon--small"
            data-spec="icon"
            data-testid="icon"
            aria-hidden="true"
          >
            <svg
              id="download_svg__eds-icon--download_svg"
              x="0"
              y="0"
              viewBox="0 0 24 24"
            >
              <path
                id="download_svg__eds-icon--download_base"
                fill="#231F20"
                d="M16 16v1h5v4H3v-4h5v-1H2v6h20v-6z"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="#231F20"
                d="M17.3 11.4l-4.8 4.7V2h-1v14.1l-4.8-4.7-.7.7 6 5.9 6-5.8z"
              ></path>
            </svg>
          </i>
          &nbsp; CSV Export
        </CSVLink>
      </footer>
    </>
  );
};

export default CreatorEvent;
