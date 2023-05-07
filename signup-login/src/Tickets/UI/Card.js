import classes from './Card.module.css';
import React from 'react';

/** A functional component for rendering a card.
@param {Object} props - The props object for the component.
@returns {JSX.Element} - The JSX element of the component.
*/
function Card(props){
  return (
    <div className={`${classes.card} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
