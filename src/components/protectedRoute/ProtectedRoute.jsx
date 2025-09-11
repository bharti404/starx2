// src/components/ProtectedRoute.js
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie';

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get('token');

  if (!token) {
    // redirect if no token
    return <Navigate to="/auth/signin-1" replace />;
  }

  return children;
};

export default ProtectedRoute;
