import React from 'react';
import { Navigate } from 'react-router-dom';
import { isValidSession } from '../Credentials/Credentials';

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = isValidSession();
  //const isAuthenticated = false;
  console.log('isAuthenticated:', isAuthenticated);
  if (isAuthenticated === false) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoutes;
