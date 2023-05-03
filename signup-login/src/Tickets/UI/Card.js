import classes from './Card.module.css';
import React from 'react';

function Card(props){
  return (
    <div className={`${classes.card} ${props.className}`} onClick={props.onClick}>
      {props.children}
    </div>
  );
};

export default Card;
