import React, { useState } from 'react';
import {
  FaHome,
  FaCalendarAlt,
  FaShoppingCart,
  FaBullhorn,
  FaFileAlt,
  FaMoneyBill,
  FaCog,
  FaThLarge,
} from 'react-icons/fa';
import SecondCustomNavLink from '../UI/SecondCustomNavLink';
import { useLocation } from 'react-router-dom';
import SecondSidebar from './SecondSidebar';
import { useEffect } from 'react';
import NavPage from '../components/NavPage';

/** An array of objects that contains the name and icon of each menu item.
@typedef {Array.<{name: string, icon: React.ReactNode}>} IconArray
*/
const icons = [
  {
    name: 'home',
    icon: <FaHome />,
  },
  {
    name: 'Events',
    icon: <FaCalendarAlt />,
  },
  {
    name: 'home-orders',
    icon: <FaShoppingCart />,
  },
  {
    name: 'home-marketing',
    icon: <FaBullhorn />,
  },
  {
    name: 'home-reports',
    icon: <FaFileAlt />,
  },
  {
    name: 'home-finance',
    icon: <FaMoneyBill />,
  },
  {
    name: 'home-settings',
    icon: <FaCog />,
  },
  {
    name: 'home-app-Marketplace',
    icon: <FaThLarge />,
  },
];

/** Sidebar component that displays a list of menu items with icons.
@param {Object} props - The props object that contains the visible and showSecond boolean values.
@param {boolean} props.visible - A boolean value that determines whether the sidebar is visible or not.
@param {boolean} props.showSecond - A boolean value that determines whether the second sidebar is shown or not.
@returns {JSX.Element} A JSX element that represents the Sidebar component.
*/
const Sidebar = ({ visible, showSecond }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isShown, setIsShown] = useState(true);
  //   const [activedIcon, setActivedIcon] = useState(null);

  /** The location object that represents the current URL path.
@typedef {Object} LocationObject
@property {string} pathname - The current URL path.
*/
  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  /** Updates the current URL path state when the location pathname changes.
@type {function} - A useEffect hook that updates the current URL path state when the location pathname changes.
*/
  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

  /** A useEffect hook that sets the isShown state to true if the showSecond prop is true. */
  useEffect(() => {
    if (showSecond === true) {
      setIsShown(true);
    }
    // if (currentUrl === '/Events') {
    //   setIsShown(true);
    // }
    // else if (currentUrl.includes('/Events' || "dashboard")) {
    //     setIsShown(true);
    //   }
    //   else setIsShown(false);
    //   isShowing(isShown)
  }, [showSecond]);

  /** Handles the click event on a menu item icon and sets the active icon state.
@param {string} name - The name of the menu item.
*/
  const handleIconClick = (name) => {
    setActiveIcon(name);
  };

  /** Handles the mouse leave event on a menu item icon and sets the active icon state to null.*/
  const handleIconLeave = () => {
    setActiveIcon(null);
  };

  //   const handleClick = (name) => {
  //     setActivedIcon(name);
  //     console.log(name)
  //   };
  if (visible) {
    return (
      <div className="sidebar" style={{ borderRight: '1px solid #ccc' }}>
        {icons.map((item) => (
          <div
            style={{ margin: '3px', position: 'relative' }}
            key={item.name}
            className="sidebar-item"
            onMouseEnter={() => handleIconClick(item.name)}
            onMouseLeave={handleIconLeave}
            //   onClick={() => handleClick(item.name)}
            //   onClick={handleIconClick(item.name)}
          >
            <div
              style={{
                fontSize: '1.5rem',
                color: '#333',
                backgroundColor: activeIcon === item.name ? 'white' : '',
                width: '80%',
                height: '80%',
                justifyContent: 'center',
                alignItems: 'center',
                display: 'flex',
                borderRadius: '6px',
                overflow: 'hidden',
              }}
            >
              <SecondCustomNavLink
                id="second-navbar"
                exact={false}
                to={`/${item.name}`}
              >
                {item.icon}
              </SecondCustomNavLink>
            </div>

            {/* {currentUrl === '/Events' && (
    <SecondSidebar  />
)} */}

            {isShown && (
              <React.Fragment>
                <SecondSidebar showSecond={showSecond} />
                {/* <NavPage /> */}
              </React.Fragment>
            )}

            {/* {currentUrl === '/Events' && (
            <div style={{transform: 'translateX(200%)', fontSize: 'small', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>{item.name}</div>
          )} */}
          </div>
        ))}
      </div>
    );
  }
};

export default Sidebar;
