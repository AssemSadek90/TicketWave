import React from 'react';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './SecondCustomNavLink.css';
import { useState, useEffect } from 'react';

/** A custom navigation link component that detects screen width to determine if it's on mobile or not
@param {Object} props - The props object
@param {string} props.to - The destination URL for the link
@param {ReactNode} props.children - The child elements to render within the link
@param {boolean} [props.exact] - Optional. Whether the link should match the exact URL or not
@returns {JSX.Element} - The custom navigation link component
*/
const SecondCustomNavLink = ({ to, children, exact }) => {

  /** Represents a stateful variable that determines if the current screen size is less than or equal to 768 pixels.
@name isMobile
@type {boolean}
@default false
*/
  const [isMobile, setIsMobile] = useState(false);

  /** useEffect hook to handle resize event and set isMobile state accordingly.
@function
@param {Function} handleResize - function to set isMobile state when screen width is less than or equal to 768 pixels
@returns {void}
*/

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
<Link exact={exact} to={to} style={isMobile ? {padding: '2vw'} : {}} 
  className="no-underlines" 
  activeClassName='actived' 
>
  {children}
</Link>

);
  };

export default SecondCustomNavLink;
