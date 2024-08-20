// /src/components/auth/PrivateRoute.js

import React from 'react';
import { Navigate } from 'react-router-dom';
import AuthService from '../../services/authService';

const PrivateRoute = ({ children }) => {
  return AuthService.getCurrentUser() ? children : <Navigate to="/connexion" />;
};

export default PrivateRoute;
