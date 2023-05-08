import React from 'react';
import styles from './CategoriesNav.module.css';
import { useEffect, useState } from 'react';
import server from '../../server';
import DisplayEvents from './Displayevents';

/**
 * The CategoriesNav component displays a navigation bar with categories.
 * It receives no props.
 *
 * @returns {JSX.Element} JSX element representing the CategoriesNav component.
 */
export default function CategoriesNav() {
  const [events, setEvents] = useState([]);

  const tabs = [
    { label: 'All', id: 1 },
    { label: 'For You', id: 2 },
    { label: 'Online', id: 3 },
    { label: 'Today', id: 4 },
    { label: 'This Weekend', id: 5 },
    { label: 'Earth Day', id: 6 },
    { label: 'Free', id: 7 },
    { label: 'Music', id: 8 },
    { label: 'Food & Drinks', id: 9 },
    { label: 'Charity & Causes', id: 10 },
  ];
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (tabId) => {
    setSelectedTab(tabId);
    console.log(selectedTab);
  };

  useEffect(() => {
    //console.log(isValidSession());
    // getUserID();
    // getUsername();
    // getFirstName();
    // getLastName();
    // getEmail();
    // const accessToken = localStorage.getItem('accessToken');
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        // Authorization: `Bearer ${accessToken}`,
      },
    };
    server
      .get(`/events/list/`, requestOptions)
      .then((response) => {
        const data = response.data.results;
        if (data) setEvents(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, [selectedTab]);
  return (
    <div>
      <nav id="categories-navbar" className={styles.navbar}>
        <ul id="categoriesnav-list" className={styles.tabs}>
          {tabs.map((tab) => (
            <li
              id="categoriesnav-list-item"
              key={tab.id}
              className={styles.tab}
              onClick={() => handleTabClick(tab.id)}
            >
              <div className={selectedTab === tab.id ? 'active' : ''}>
                {tab.label}
                <div
                  id="categoriesnav-underline"
                  className={styles.underline}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </nav>
      <DisplayEvents id="event-container" eventsData={events} />
    </div>
  );
}
