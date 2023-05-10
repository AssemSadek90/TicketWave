import React from 'react';
import { useState } from 'react';
import styles from './Navbar.module.css';
import NavBarListItem from './NavBarListItem';
import SearchButton from './NavBarSearch';
import Dropdown from './DropMenu';
import Tabs from './Tabs';
import server from '../server';
import { useNavigate } from 'react-router-dom';
import { getEmail } from '../Credentials/Credentials';

/**
 * The `Navbar` component is a navigation bar that contains a site title,
 * search button, and multiple buttons and dropdown menus.
 *
 * @returns A `nav` HTML element that contains two `ul` elements with
 * `NavBarListItem`, `SearchButton`, `Dropdown`, and `Tabs` components.
 */
export default function Navbar() {
  const dropdownSvg = (
    <svg className={styles.svg_icon} viewBox="0 0 24 24">
      <path d="M12 18c-1.2 0-2.4-.3-3.5-.7.6-1.3 2-2.2 3.5-2.2s2.9.9 3.5 2.2c-1.1.4-2.3.7-3.5.7zm6.5-2.9c-.4.4-.8.8-1.3 1.1a5.989 5.989 0 00-10.6 0c-.5-.3-.9-.7-1.3-1.1L4 16.5c2.1 2.3 5 3.5 8 3.5s5.9-1.3 8-3.5l-1.5-1.4z"></path>
      <path d="M12 4C9.7 4 7.8 5.9 7.8 8.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2S14.3 4 12 4zm0 6.4c-1.2 0-2.2-1-2.2-2.2C9.8 7 10.8 6 12 6s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"></path>
    </svg>
  );
  const [searchText, setSearchText] = useState('');
  const email = localStorage.getItem('userEmail');
  const navigate = useNavigate();
  function handleLogOut() {
    const accessToken = localStorage.getItem('accessToken');
    const requestOptions = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`,
      },
    };
    server
      .get(`/auth/logout/`, requestOptions)
      .then((response) => {
        console.log(response);
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/');
      })
      .catch((error) => console.log(error));
  }
  function handleChangePassword() {
    navigate('/change-password');
  }
  function handleSearch() {
    navigate('/Search');
  }
  function handleManage() {
    navigate('/Events');
  }
  return (
    <nav className={styles.navigation_bar} id="navigation-bar">
      <ul className={styles.navbar_ul} id="navbar-ul">
        <a className={styles.navbar_a} href="/home">
          <span className={styles.site_title}>TicketWave</span>
        </a>
        <SearchButton onClick={handleSearch} label="Search events" />
      </ul>
      <ul className={styles.navbar_ul} id="navbar-ul">
        <NavBarListItem title="Create Event" path="/signin">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem title="Likes" path="#">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M18.8 6.2C18.1 5.4 17 5 16 5c-1 0-2 .4-2.8 1.2L12 7.4l-1.2-1.2C10 5.4 9 5 8 5c-1 0-2 .4-2.8 1.2-1.5 1.6-1.5 4.2 0 5.8l6.8 7 6.8-7c1.6-1.6 1.6-4.2 0-5.8zm-1.4 4.4L12 16.1l-5.4-5.5c-.8-.8-.8-2.2 0-3C7 7.2 7.5 7 8 7c.5 0 1 .2 1.4.6l2.6 2.7 2.7-2.7c.3-.4.8-.6 1.3-.6s1 .2 1.4.6c.8.8.8 2.2 0 3z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem title="Tickets" path="/Sold-Tickets">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M10 13v-2h4v2zm6 5V6h-.4C15 7.4 13.8 8.4 12 8.4S9 7.4 8.4 6H8v12h.4c.6-1.4 1.8-2.4 3.6-2.4s3 1 3.6 2.4zM14 4h4v16h-4s0-2.4-2-2.4-2 2.4-2 2.4H6V4h4s0 2.4 2 2.4S14 4 14 4z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem>
          <Dropdown title={email} tag={dropdownSvg}>
            <Tabs
              title="Browse events"
              onClick={handleSearch}
              id="browse-events-tab"
            />
            <Tabs
              title="Manage my events"
              onClick={handleManage}
              id="manage-events-tab"
            />
            <Tabs
              title="Change password"
              onClick={handleChangePassword}
              id="Change-password-tab"
            />
            <Tabs title="Log out" onClick={handleLogOut} id="log-out-tab" />
          </Dropdown>
        </NavBarListItem>
      </ul>
    </nav>
  );
}
