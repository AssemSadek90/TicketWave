import React from 'react';
import { useState } from 'react';
import '../App.css';
import styles from './NANavbar.module.css';
import NavBarListItem from './NavBarListItem';
import SearchButton from './NavBarSearch';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

/**
 * Renders the Navbar component, which contains the site title, search bar, and navigation links.
 *
 * @returns {JSX.Element} The Navbar component.
 */
export default function Navbar() {
  const [searchText, setSearchText] = useState('');
  const [email, setEmail] = useState('example@example.com');
  const navigate = useNavigate();
  /**
   * Navigates to the sign-in page when the "LOG IN" link is clicked.
   */
  function handleLogClick() {
    navigate('/signin');
  }
  /**
   * Navigates to the sign-up page when the "SIGN UP" link is clicked.
   */
  function handleSignClick() {
    navigate('/');
  }

  return (
    <nav className={styles.navigation_bar} id="navigation-bar">
      <ul id="navbar-ul">
        <a href="/home">
          <span className={styles.site_title}>TicketWave</span>
        </a>
        <SearchButton to="https://www.eventbrite.com" label="Search events" />
      </ul>
      <ul id="navbar-ul">
        <NavBarListItem title="Create Event">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem title="LOG IN" path="/signin" />
        <NavBarListItem title="SIGN UP" path="/" />
      </ul>
    </nav>
  );
}
