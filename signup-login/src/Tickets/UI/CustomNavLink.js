import React from 'react';
import { NavLink } from 'react-router-dom';
import './CustomNavLink.css';
import { useState, useEffect } from 'react';

/** A functional component for rendering a custom nav link.
@param {string} to - The URL to which the link should navigate.
@param {React.ReactNode} children - The children to be rendered within the link.
@returns {JSX.Element} - The JSX element of the component.
*/
  const CustomNavLink = ({ to, children }) => {

    /** A hook to detect if the screen width is less than or equal to 768 pixels and set it to a state variable.
@returns {boolean} - A boolean value indicating if the screen width is less than or equal to 768 pixels.
*/
  const [isMobile, setIsMobile] = useState(false);

  /** Sets the state of isMobile based on the current screen width. Listens to the window resize event to update the state.
@function
@name useResizeListener
@param {boolean} isMobile - The state variable that represents whether the screen width is less than or equal to 768 pixels.
@param {function} setIsMobile - The function that updates the isMobile state variable.
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
    <NavLink exact={true} to={to} style={isMobile ? {padding: '2vw'}:{}} className="no-underline">
  {children}
</NavLink>
);
  };

export default CustomNavLink;
