import React from 'react';
import { Link } from 'react-router-dom';
import './CustomLink.css';

/** A functional component for rendering a custom link.
@param {string} to - The URL to which the link should navigate.
@param {React.ReactNode} children - The children to be rendered within the link.
@returns {JSX.Element} - The JSX element of the component.
*/
const CustomLink = ({ to, children }) => (
  <Link to={to} className="no-underline">
    {children}
  </Link>
);

export default CustomLink;
