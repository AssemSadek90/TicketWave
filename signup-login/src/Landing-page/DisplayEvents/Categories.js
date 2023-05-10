import React from 'react';
import styles from './CategoriesNav.module.css';

/**
 * A component that displays a navigation bar with different tabs to display events based on their categories and dates.
 *
 * @returns {JSX.Element} A React component that renders a navigation bar with tabs and displays events based on the selected tab.
 */
export default function CategoriesNav() {
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

  const handleTabClick = (tab) => {
    setSelectedTab(tab.id);
    setSelectedTabLabel(tab.label);
  };

  useEffect(() => {
    //console.log(isValidSession());
    // getUserID();
    // getUsername();
    // getFirstName();
    // getLastName();
    // getEmail();
    const accessToken = localStorage.getItem('accessToken');
    if (selectedTab == 1 || selectedTab == 5) {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
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
    }
    if (selectedTab == 2) {
      const date = new Date();
      const isoDate = date.toISOString();
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          start__gte: isoDate,
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
    }
    if (selectedTab == 3) {
      const date = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999); // set to end of day
      const isoDate = endOfDay.toISOString();
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          start__gte: date,
          start__lte: isoDate,
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
    }
    if (selectedTab == 4) {
      // Get the current date
      const now = new Date();

      // Get the date for next week
      const nextWeek = new Date();
      const endNextWeek = new Date();
      nextWeek.setDate(now.getDate() + 6);
      endNextWeek.setDate(now.getDate() + 13);

      // Set the time for the end of the day
      nextWeek.setHours(23, 59, 59, 999);

      // Format the date in ISO 8601 format
      const isoString = nextWeek.toISOString();
      const isoStringEnd = endNextWeek.toISOString();

      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          start__gte: isoString,
          start__lte: isoStringEnd,
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
    }
    if (
      selectedTab == 6 ||
      selectedTab == 7 ||
      selectedTab == 8 ||
      selectedTab == 9 ||
      selectedTab == 10
    ) {
      const requestOptions = {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          category: selectedTabLabel,
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
    }
  }, [selectedTab]);
  return (
    <nav id="categories-navbar" className={styles.navbar}>
      <ul id="categoriesnav-list" className={styles.tabs}>
        {tabs.map((tab) => (
          <li id="categoriesnav-list-item" key={tab.id} className={styles.tab}>
            {tab.label}
            <div
              id="categoriesnav-underline"
              className={styles.underline}
            ></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
