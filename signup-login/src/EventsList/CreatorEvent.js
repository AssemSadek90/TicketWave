import { useEffect, useState, React } from 'react';
import { CSVLink } from 'react-csv';
import DisplayEvents from './DisplayCreatorEvents';
import EventsListNavBar from './EventsListNavBar';
import SecondNav from './SecondNav';
import './EventsList.css';
import server from '../server';

const CreatorEvent = () => {
  const [loading, setLoading] = useState(true);
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
  const [eventIDs, setEventIDs] = useState([]);
  const [capacities, setCapacities] = useState([]);
  const [totalSales, setTotalSales] = useState([]);
  const [EventsData, setEventsData] = useState([]);
  const [newEventsData, setNewEventsData] = useState([]);
  const gross = [];
  const cap = [];
  const tickets = [];

  async function fetchCapacity(eventId) {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };
      const response = await server.get(
        `/events/private/retrieve/${eventId}/`,
        requestOptions
      );
      console.log('cap', response.data.capacity);
      const data = response.data;
      const capacity = data.capacity; // Assuming the capacity is returned in the response
      cap.push(capacity);
      console.log('cap', cap);
      return capacity;
    } catch (error) {
      // Handle error if the request fails
      console.error(
        `Failed to retrieve capacity for event ID ${eventId}`,
        error
      );
      return null;
    }
  }

  async function fetchCapacities(events) {
    const capacities = [];

    for (const event of events) {
      const capacity = await fetchCapacity(event.id);
      if (capacity !== null) {
        capacities.push(capacity);
      }
    }

    return capacities;
  }

  async function fetchTicketsSold(eventId) {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await server.get(
        `/events/amount_of_tickets_sold/${eventId}/`,
        requestOptions
      );
      const ticketsSold = response.data; // Assuming the response contains the number of tickets sold
      console.log('ticketsSold', ticketsSold);
      tickets.push(ticketsSold);
      console.log('tickets', tickets);
      return ticketsSold;
    } catch (error) {
      // Handle error if the request fails
      console.error(
        `Failed to retrieve tickets sold for event ID ${eventId}`,
        error
      );
      return null;
    }
  }

  async function fetchTicketsSoldForEvents(events) {
    const ticketsSoldData = [];

    for (const event of events) {
      const ticketsSoldResponse = await fetchTicketsSold(event.id);
      if (ticketsSoldResponse !== null) {
        const ticketsSold = ticketsSoldResponse['tickets sold'];
        ticketsSoldData.push(ticketsSold);
      }
    }

    return ticketsSoldData;
  }

  function processTicketsSold(ticketsSoldArray) {
    // Perform your desired mapping operation on the ticketsSoldArray
    const processedData = ticketsSoldArray.map((ticketSold) => {
      // Process each ticketSold item and return the desired value
      return ticketSold.toUpperCase(); // Example: Convert each item to uppercase
    });

    // Return the processed data
    return processedData;
  }

  async function fetchTotalSales(eventId) {
    try {
      const accessToken = localStorage.getItem('accessToken');
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };

      const response = await server.get(
        `/events/total_sales/${eventId}/`,
        requestOptions
      );
      const totalSales = response.data; // Assuming the response contains the total sales
      console.log('totalSales', totalSales);
      gross.push(totalSales);
      console.log('gross', gross);
      return totalSales;
    } catch (error) {
      console.error(
        `Failed to retrieve total sales for event ID ${eventId}`,
        error
      );
      return null;
    }
  }

  async function fetchTotalSalesForEvents(events) {
    const totalSalesData = [];

    for (const event of events) {
      const totalSalesResponse = await fetchTotalSales(event.id);
      if (totalSalesResponse !== null) {
        const totalSales = totalSalesResponse['total sales'];
        totalSalesData.push(totalSales);
      }
    }

    return totalSalesData;
  }

  // Usage in your code:
  // Assuming you have the ticketsSold array available

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
    const fetchData = async () => {
      console.log('fetching data');
      console.log('fetching data');
      const accessToken = localStorage.getItem('accessToken');
      const userID = localStorage.getItem('userID');
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      };

      // Fetch events
      const eventsResponse = await server.get(
        `/events/list/?owner=${userID}`,
        requestOptions
      );
      //const eventsData = eventsResponse.data.results;
      // if (eventsData) {
      setEvents(eventsResponse.data.results);

      // Fetch capacities for each event
      const capacities = await fetchCapacities(events);
      setCapacities(capacities);

      // Fetch tickets sold for each event
      const ticketsSoldData = await fetchTicketsSoldForEvents(events);
      setTicketsSold(ticketsSoldData);

      // Fetch total sales for each event
      const totalSalesData = await fetchTotalSalesForEvents(events);
      setTotalSales(totalSalesData);
      store();
      setNewEventsData(events);
      console.log('newEventsData', newEventsData);
      console.log('eventyes', events);
      console.log('newEventsData', newEventsData);
      const updatedData = events.map((event) => ({
        Event: event.name,
        Date: new Date(event.start),
        Status: event.status,
        'Tickets Sold': event.ticketsSold,
        'Tickets Available': event.capacity - event.ticketsSold,
      }));
      setEventsData(updatedData);
    };

    fetchData();
    //store();
    console.log('events', events);
  }, []);

  /**
   * Maps the events data to the desired format.
   * @type {Array}
   */
  function store() {
    for (let i = 0; i < events.length; i++) {
      gross[i] = gross[i]['total sales'];
      tickets[i] = tickets[i]['tickets sold'];
      events[i].capacity = cap[i];
      events[i].ticketsSold = tickets[i];
      events[i].totalSales = gross[i];
    }
  }

  return (
    <>
      <div className="creator-events-view">
        <p className="eds-text-hm__title snipcss0-0-0-1 snipcss-vBV7a">
          Events
        </p>
        <SecondNav />
        <EventsListNavBar />
        <DisplayEvents eventsData={newEventsData} />
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
