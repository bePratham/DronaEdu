import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element, isAuthenticated, redirectTo }) => {
  return isAuthenticated ? (
   Element
  ) : (
    <Navigate to={redirectTo} />
  );
};
export default PrivateRoute;
