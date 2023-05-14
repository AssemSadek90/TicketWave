import React from 'react';
import { Link } from 'react-router-dom';
import './CustomLink.css';
import { useState } from "react";


/** A functional component for rendering a custom link.
@param {string} to - The URL to which the link should navigate.
@param {React.ReactNode} children - The children to be rendered within the link.
@returns {JSX.Element} - The JSX element of the component.
*/
function CustomLink({ to, children }) {
  const [linkId, setLinkId] = useState('');


  // function handleClick() {
  //   if (children === 'Add Attendees') {
  //     setLinkId('add-attendees-link');
  //   }
  //   else if (children === 'Sold Tickets') {
  //     setLinkId('sold-tickets-link');
  //   }
  // }

  function handleClick(event) {
    const linkText = event.target.innerText;
    if (linkText === 'Add Attendees') {
      setLinkId('add-attendees-link');
    } else if (linkText === 'Sold Tickets') {
      setLinkId('sold-tickets-link');
    }
  }


  return (
    <Link to={to} onClick={handleClick} className="no-underline" id={linkId}>
      {children}
    </Link>
  );
}

// const CustomLink = ({ to, children }) => (
//   <Link to={to} onClick={handleClick} className="no-underline" id={linkId} >
//     {children}
//   </Link>
// );

export default CustomLink;
