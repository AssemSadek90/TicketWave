import React from 'react';
import styles from './Search.module.css';

export default function Search() {
  return (
    <div className={styles.search_page_container}>
      <div className={styles.page_comp1}>
        <div className={styles.search_container}>
          <svg
            className={styles.search_icon}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M10 14c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm3.5.9c-1 .7-2.2 1.1-3.5 1.1-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6c0 1.3-.4 2.5-1.1 3.4l5.1 5.1-1.5 1.5-5-5.1z"></path>{' '}
          </svg>
          <input
            type="text"
            className={styles.search_input}
            placeholder="Search for anything"
          />
          <button type="submit" className={styles.search_button}>
            <svg
              className={styles.search_icon}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M10.5 5.5L16 11H4v2h12l-5.5 5.5L12 20l8-8-8-8z"></path>{' '}
            </svg>
          </button>
        </div>
        <div className={styles.venue_container}>
          <svg className={styles.search_icon} x="0" y="0" viewBox="0 0 24 24">
            <path d="M11.6 11.6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm0-7.6C8.5 4 6 6.5 6 9.6 6 13.8 11.6 20 11.6 20s5.6-6.2 5.6-10.4c0-3.1-2.5-5.6-5.6-5.6z"></path>
          </svg>
        </div>
      </div>
      <div className={styles.page_comp2}>
        <div>
          <img src="/static/media/Image.11978f4fefb19633d677.png" alt="Image" />
        </div>{' '}
      </div>
    </div>
  );
}
