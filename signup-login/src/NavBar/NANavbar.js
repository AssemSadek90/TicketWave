// import React from 'react';
// import { useState } from 'react';
// import '../App.css';
// import styles from './Navbar.module.css';
// import NavBarListItem from './NavBarListItem';
// import SearchButton from './NavBarSearch';
// import { useNavigate } from 'react-router-dom';

// /**
//  * The `Navbar` component is a navigation bar that contains a site title,
//  * search button, and multiple buttons and dropdown menus.
//  *
//  * @returns A `nav` HTML element that contains two `ul` elements with
//  * `NavBarListItem`, `SearchButton`, `Dropdown`, and `Tabs` components.
//  */
// export default function NANavbar() {
//   const [searchText, setSearchText] = useState('');
//   const [email, setEmail] = useState('example@example.com');
//   const navigate = useNavigate();

//   return (
//     <nav className={styles.navigation_bar}>
//       <ul>
//         <a href="#">
//           <span className={styles.site_title}>TicketWave</span>
//         </a>
//         <SearchButton to="https://www.eventbrite.com" label="Search events" />
//       </ul>
//       <ul>
//         <NavBarListItem
//           className={styles.create_event}
//           title="Create Event"
//           link="/signin"
//         >
//           <svg className={styles.svg_icon} viewBox="0 0 20 20">
//             <path d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"></path>
//           </svg>
//         </NavBarListItem>
//         <NavBarListItem title="Log In" link="/signin" />
//         <NavBarListItem title="Sign Up" link="/" />
//       </ul>
//     </nav>
//   );
// }
/**  */

import React from 'react';
import { useState } from 'react';
import '../App.css';
import styles from './Navbar.module.css';
import NavBarListItem from './NavBarListItem';
import SearchButton from './NavBarSearch';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

/**
 * The `Navbar` component is a navigation bar that contains a site title,
 * search button, and multiple buttons and dropdown menus.
 *
 * @returns A `nav` HTML element that contains two `ul` elements with
 * `NavBarListItem`, `SearchButton`, `Dropdown`, and `Tabs` components.
 */
export default function Navbar() {
  const [searchText, setSearchText] = useState('');
  const [email, setEmail] = useState('example@example.com');
  const navigate = useNavigate();

  function HandleClick(path) {
    React.useEffect(() => {
      navigate(path);
    }, [path]);
  }
  return (
    <nav className={styles.navigation_bar}>
      <ul>
        <a href="#">
          <span className={styles.site_title}>TicketWave</span>
        </a>
        <SearchButton to="https://www.eventbrite.com" label="Search events" />
      </ul>
      <ul>
        <NavBarListItem
          onClick={HandleClick('/')}
          className={styles.create_event}
          title="Create Event"
        >
          <svg className={styles.svg_icon} viewBox="0 0 20 20">
            <path d="M13 11V4h-2v7H4v2h7v7h2v-7h7v-2z"></path>
          </svg>
        </NavBarListItem>
        <NavBarListItem
          onClick={() => HandleClick('/signin')}
          title="Log in"
        ></NavBarListItem>
        <NavBarListItem
          onClick={() => HandleClick('/')}
          title="Sign up"
        ></NavBarListItem>
      </ul>
    </nav>
  );
}
