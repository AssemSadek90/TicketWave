import React from 'react';
import styles from './Search.module.css';
import Location from '../Landing-page/Location/Location';
import { useState, useEffect } from 'react';
import server from '../server';
import ResulList from './ResultList';

/**
 * The Search component displays a search bar, a location selector, and a list of results based on the user's search query.
 * The component fetches the search results from the backend API and updates the state accordingly.
 *
 * @returns {JSX.Element} The Search component JSX element.
 */
export default function Search() {
  // Retrieve the access token from local storage.

  const accessToken = localStorage.getItem('accessToken');

  const [events, setEvents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const handleSubmit = (event) => {
    setSearchText(event.target.value);
  };
  useEffect(() => {
    if (searchText != '') {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          //Authorization: `Bearer ${accessToken}`,
        },
        params: {
          search: searchText,
        },
      };
      server
        .get(`/events/list/`, requestOptions)
        .then((response) => {
          const data = response.data.results;
          if (data) setEvents(data);
        })
        .catch((error) => console.log(error));
    }
  }, [searchText]);

  return (
    <div id="search-page-container" className={styles.search_page_container}>
      <div className={styles.page_comp1}>
        <div id="search-container" className={styles.search_container}>
          <svg
            id="svg-icon"
            className={styles.search_icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"></path>{' '}
          </svg>
          <input
            id="search-text"
            type="text"
            className={styles.search_input}
            placeholder="Search for any event"
            onChange={handleSubmit}
          />
          <button type="submit" className={styles.search_button}>
            <svg
              id="svg-icon"
              className={styles.search_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path>{' '}
            </svg>
          </button>
        </div>
        <div id="venue-container" className={styles.venue_container}>
          <svg
            id="svg-icon"
            className={styles.search_icon}
            x="0"
            y="0"
            viewBox="0 0 24 24"
          >
            <path d="M11.6 11.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-7.6C8.5 4 6 6.5 6 9.6 6 13.8 11.6 20 11.6 20s5.6-6.2 5.6-10.4c0-3.1-2.5-5.6-5.6-5.6z"></path>
          </svg>
          <Location />
        </div>
        <div id="results-container" className={styles.results_container}>
          <ResulList data={events} />
        </div>
      </div>
      <div id="comp2-image" className={styles.page_comp2}>
        <div>
          <img src="/static/media/Image.11978f4fefb19633d677.png" alt="Image" />
        </div>{' '}
      </div>
    </div>
  );
}
