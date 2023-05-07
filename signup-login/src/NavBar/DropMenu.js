import React, { useState } from 'react';
import styles from './Navbar.module.css';

/**
 * Dropdown component that displays a button and a dropdown menu. The dropdown
 * menu is only visible when the user hovers over the button.
 *
 * @param {Object} props - The props object for this component.
 * @param {string} props.title - The text to display on the button.
 * @param {JSX.Element} props.tag - The icon to display beside the text
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
      id="dropdown-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className={styles.dropdown_button} id="dropdown-button">
        <span>{props.tag}</span>
        <span>{props.title}</span>
      </button>
      {isOpen && (
        <div className={styles.dropdown_menu} id="dropdown-menu">
          <ul id="dropdown-menu-ul">{props.children}</ul>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
