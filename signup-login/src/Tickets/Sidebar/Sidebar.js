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

const Sidebar = ({ visible, showSecond }) => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isShown, setIsShown] = useState(true);
  //   const [activedIcon, setActivedIcon] = useState(null);

  const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname);
  }, [location.pathname]);

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

  const handleIconClick = (name) => {
    setActiveIcon(name);
  };

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
