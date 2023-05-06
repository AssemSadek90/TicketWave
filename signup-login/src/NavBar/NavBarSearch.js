import React from 'react';
import styles from './Navbar.module.css';

/**

A component representing a search button with an icon and label
@param {Object} props - The component props
@param {string} props.label - The label to display next to the search icon
@param {string} props.to - The URL to navigate to when the button is clicked
@returns {JSX.Element} - A button element with an icon and label
*/

function SearchButton(props) {
  return (
    <button className={styles.search_button} onClick={props.onClick}>
      <svg className={styles.svg_icon} viewBox="0 0 24 24">
        <path d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"></path>
      </svg>
      <span className={styles.label}>{props.label}</span>
    </button>
  );
}

export default SearchButton;
