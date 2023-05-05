import jwt from 'jwt-decode';
import server from '../server';

export const isValidSession = () => {
  const accessToken = localStorage.getItem('accessToken');
  if (accessToken) {
    return true;
  } else {
    return false;
  }
};

export const getUserID = () => {
  console.log('getUserID called');
  const accessToken = localStorage.getItem('accessToken');
  try {
    const decodedToken = jwt(accessToken);
    const userId = decodedToken.user_id;
    console.log('Decoded JWT token:', decodedToken);
    console.log('User ID:', userId);
    return userId;
  } catch (err) {
    console.error('Error decoding JWT token:', err);
  }
};

export const getEmail = () => {
  const id = getUserID();
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
  };
  server
    .get(`/users/id/${id}/`, requestOptions)
    .then((response) => {
      const email = response.data.email;
      console.log(email);
      return email;
    })
    .catch((error) => {
      console.log(error);
      return 'null';
    });
};

export const getUsername = () => {
  const id = getUserID();
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
  };
  server
    .get(`/users/id/${id}/`, requestOptions)
    .then((response) => {
      const username = response.data.username;
      console.log(username);
      return username;
    })
    .catch((error) => {
      console.log(error);
      return 'null';
    });
};

export const getFirstName = () => {
  const id = getUserID();
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
  };
  server
    .get(`/users/id/${id}/`, requestOptions)
    .then((response) => {
      const firstName = response.data.first_name;
      console.log(firstName);
      return firstName;
    })
    .catch((error) => {
      console.log(error);
      return 'null';
    });
};

export const getLastName = () => {
  const id = getUserID();
  const requestOptions = {
    headers: { 'Content-Type': 'application/json' },
  };
  server
    .get(`/users/id/${id}/`, requestOptions)
    .then((response) => {
      const lastName = response.data.last_name;
      console.log(lastName);
    })
    .catch((error) => {
      console.log(error);
      return 'null';
    });
};
