import React from 'react';
import { useState } from 'react';
import '../App.css';
import styles from './NANavbar.module.css';
import NavBarListItem from './NavBarListItem';
import SearchButton from './NavBarSearch';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

/**
 * Renders the NANavbar component, which contains the site title, search bar, and navigation links.
 *
 * @returns {JSX.Element} The NA component.
 */
export default function NANavbar() {
  const navigate = useNavigate();
  function handleSearch() {
    navigate('/Search');
  }

  return (
    <nav className={styles.navigation_bar} id="navigation-bar">
      <ul id="navbar-ul">
        <a href="/home">
          <span className={styles.site_title}>TicketWave</span>
        </a>
        <SearchButton onClick={handleSearch} label="Search events" />
      </ul>
      <ul id="navbar-ul">
        <NavBarListItem title="Create Event" path="/signup">
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem title="LOG IN" path="/signin" />
        <NavBarListItem title="SIGN UP" path="/signup" />
      </ul>
    </nav>
  );
}
