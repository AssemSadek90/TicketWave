import React, { useState } from 'react';
import styles from './Navbar.module.css';

/**
 * Dropdown component that displays a button and a dropdown menu. The dropdown
 * menu is only visible when the user hovers over the button.
 *
 * @param {Object} props - The props object for this component.
 * @param {string} props.title - The text to display on the button.
 * @param {Array} props.children - The list items to display in the dropdown menu.
 * @returns {JSX.Element} - The Dropdown component JSX markup.
 */
function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);

  function handleMouseEnter() {
    setIsOpen(true);
  }

  function handleMouseLeave() {
    setIsOpen(false);
  }

  return (
    <div
      className={styles.dropdown_container}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={styles.dropdown_button} id="dropdown-user-name">
        <svg className={styles.svg_icon} viewBox="0 0 24 24">
          <path d="M12 18c-1.2 0-2.4-.3-3.5-.7.6-1.3 2-2.2 3.5-2.2s2.9.9 3.5 2.2c-1.1.4-2.3.7-3.5.7zm6.5-2.9c-.4.4-.8.8-1.3 1.1a5.989 5.989 0 00-10.6 0c-.5-.3-.9-.7-1.3-1.1L4 16.5c2.1 2.3 5 3.5 8 3.5s5.9-1.3 8-3.5l-1.5-1.4z"></path>
          <path d="M12 4C9.7 4 7.8 5.9 7.8 8.2s1.9 4.2 4.2 4.2 4.2-1.9 4.2-4.2S14.3 4 12 4zm0 6.4c-1.2 0-2.2-1-2.2-2.2C9.8 7 10.8 6 12 6s2.2 1 2.2 2.2c0 1.2-1 2.2-2.2 2.2z"></path>
        </svg>
        <span>{props.title}</span>
      </button>
      {isOpen && (
        <div className={styles.dropdown_menu}>
          <ul>{props.children}</ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
