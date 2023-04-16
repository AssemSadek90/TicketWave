import React from 'react';
import styles from './CategoriesNav.module.css';

/**
 * The CategoriesNav component displays a navigation bar with categories.
 * It receives no props.
 *
 * @returns {JSX.Element} JSX element representing the CategoriesNav component.
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

  return (
    <nav className={styles.navbar}>
      <ul className={styles.tabs}>
        {tabs.map((tab) => (
          <li key={tab.id} className={styles.tab}>
            {tab.label}
            <div className={styles.underline}></div>
          </li>
        ))}
      </ul>
    </nav>
  );
}
