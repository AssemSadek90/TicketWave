import React, { useState } from 'react';
import { FaHome, FaCalendarAlt, FaShoppingCart, FaBullhorn, FaFileAlt, FaMoneyBill, FaCog, FaThLarge } from 'react-icons/fa';
import SecondCustomNavLink from '../UI/SecondCustomNavLink';
import { useLocation } from 'react-router-dom';
import SecondSidebar from './SecondSidebar';
import { useEffect } from 'react';

const icons = [
    {
      name: 'Home',
      icon: <FaHome />,
    },
    {
      name: 'Events',
      icon: <FaCalendarAlt />,
    },
    {
      name: 'Orders',
      icon: <FaShoppingCart />,
    },
    {
      name: 'Marketing',
      icon: <FaBullhorn />,
    },
    {
      name: 'Reports',
      icon: <FaFileAlt />,
    },
    {
      name: 'Finance',
      icon: <FaMoneyBill />,
    },
    {
      name: 'Settings',
      icon: <FaCog />,
    },
    {
      name: 'App-Marketplace',
      icon: <FaThLarge />,
    },
  ];



const Sidebar = ({isShowing}) => {
  const [activeIcon, setActiveIcon] = useState(null);
  const [isShown, setIsShown] = useState(false);
//   const [activedIcon, setActivedIcon] = useState(null);





const location = useLocation();
  const [currentUrl, setCurrentUrl] = useState(location.pathname);

  useEffect(() => {
    setCurrentUrl(location.pathname);
    isShowing(isShown);
    // if (currentUrl === './Events')
  }, [location.pathname]);



  useEffect(() => {
    if (currentUrl === '/Events') {
      setIsShown(true);
    }
    else if (currentUrl.includes('/Events')) {
        setIsShown(true);
        isShowing(true);
      }

      else setIsShown(false);

      isShowing(isShown)
  }, [currentUrl, location]);


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

  return (
    <div className="sidebar" style={{borderRight: '1px solid #ccc'}}>
        
      {icons.map((item) => (
        <div 
        style={{margin: '3px', position: 'relative'}}
          key={item.name}
          className="sidebar-item"
          onMouseEnter={() => handleIconClick(item.name)}
          onMouseLeave={handleIconLeave}
        //   onClick={() => handleClick(item.name)}
        //   onClick={handleIconClick(item.name)}
        >
            
            <div style={{fontSize: '1.5rem', color: '#333', backgroundColor: activeIcon === item.name ? 'white' : '', width: '80%', height: '80%', justifyContent: 'center', alignItems: 'center', display: 'flex', borderRadius: '6px', overflow: 'hidden'}}
>
<SecondCustomNavLink  exact={false} to={`/${item.name}`}>
          {item.icon}
          </SecondCustomNavLink>
          </div>
          
          {/* {currentUrl === '/Events' && (
    <SecondSidebar  />
)} */}


{isShown && (
  <SecondSidebar />
)}


          {/* {currentUrl === '/Events' && (
            <div style={{transform: 'translateX(200%)', fontSize: 'small', backgroundColor: 'white', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)'}}>{item.name}</div>
          )} */}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
