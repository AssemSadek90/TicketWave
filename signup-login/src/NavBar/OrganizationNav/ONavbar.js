import React from 'react';
import { useState } from 'react';
import styles from './ONavbar.module.css';
import Dropdown from '../DropMenu';
import Tabs from '../Tabs';
import server from '../../server';
import { useNavigate } from 'react-router-dom';
import { getFirstName, getLastName } from '../../Credentials/Credentials';

/**
 * The ONavbar component is a navigation bar that displays the site title,
 * user initials and name, and a dropdown menu with "Switch To Attending" and "Log out" tabs.
 *
 * @returns A nav HTML element that contains two ul elements with Dropdown
 *and Tabs components.
 */
export default function ONavbar() {
  const fname = 'karim';
  // getFirstName();
  const lname = 'elnady';
  // getLastName();
 
  const name = fname + ' ' + lname;
  const initials =
    fname.slice(0, 1).toUpperCase() + lname.slice(0, 1).toUpperCase();
  const initialsSvg = (
    <div className={styles.initials_container} id="initials-container">
      <span>{initials}</span>
    </div>
  );
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
  return (
    <nav className={styles.navigation_bar} id="navigation-bar">
      <ul className={styles.navbar_ul} id="navbar-ul">
        <div className={styles.navbar_li_1} id="navbar-li">
          <a className={styles.navbar_a} href="/home">
            <span className={styles.site_title}>TicketWave</span>
          </a>
        </div>
        <div className={styles.navbar_li_2} id="navbar-li">
          <Dropdown title={name} tag={initialsSvg}>
            <Tabs title="Switch To Attending" path="#" />
            <Tabs title="Log out" onClick={handleLogOut} id="log-out-tab" />
          </Dropdown>
        </div>
      </ul>
    </nav>
  );
}
