import React from 'react';

export function Validate(props) {
  if (props.email !== props.confirmEmail) {
    props.setvalidData(false);
    return <p>Emails do not match</p>;
  } else if (props.firstName.length === 0) {
    props.setvalidData(false);
    return <p>Please enter first name</p>;
  } else if (props.lastName.length === 0) {
    props.setvalidData(false);
    return <p>Please enter last name</p>;
  } else if (!props.validPassword) {
    props.setvalidData(false);
    return <p>Password is less than 6 character long.</p>;
  } else {
    return <p></p>;
  }
}

export default Validate;
