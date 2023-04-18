import React from 'react';
import { useNavigate } from 'react-router-dom';
import server from '../server';

/**
 * Signs out the user by sending a logout request to the server and removing the access and refresh tokens from the local storage.
 *
 * @function
 * @returns {void}
 */

export function signOut() {
  const accessToken = localStorage.getItem('accessToken');
  const requestOptions = {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
    },
  };
  server
    .get(`/auth/logout/`, requestOptions)
    .then((response) => {
      console.log(response);
      localStorage.removeItem('accessToken');
      localStorage.removeItem('refreshToken');
    })
    .catch((error) => console.log(error));
}
