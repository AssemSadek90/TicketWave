import React from 'react';
import { Navigate } from 'react-router-dom';
import { isValidSession } from '../Credentials/Credentials';

const ProtectedRoutes = ({ children }) => {
  const isAuthenticated = isValidSession();
  console.log('isAuthenticated:', isAuthenticated);
  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }
  return children;
};

export default ProtectedRoutes;
