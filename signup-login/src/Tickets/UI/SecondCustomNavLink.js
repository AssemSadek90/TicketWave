import React from 'react';
import { NavLink } from 'react-router-dom';
import './SecondCustomNavLink.css';
import { useState, useEffect } from 'react';

const SecondCustomNavLink = ({ to, children, exact }) => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Set to true if screen width is less than or equal to 768 pixels
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  return(
    <NavLink exact={exact} to={to} style={isMobile ? {padding: '2vw'}:{}} className="no-underlines" activeClassName='actived'>
  {children}
</NavLink>
);
  };

export default SecondCustomNavLink;
