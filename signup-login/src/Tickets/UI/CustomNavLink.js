import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomNavLink.css';
import { useState, useEffect } from 'react';

const CustomNavLink = ({ to, children }) => {

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
    <NavLink exact={true} to={to} style={isMobile ? {padding: '2vw'}:{}} className="no-underline" activeClassName='active'>
  {children}
</NavLink>
);
  };

export default CustomNavLink;
