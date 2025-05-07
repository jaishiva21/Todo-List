import React from 'react';
import { Navigate } from 'react-router-dom';

class ProtectedRoute extends React.Component {
  render() {
    const isAuthenticated = localStorage.getItem('isLoggedIn');
    return isAuthenticated ? this.props.children : <Navigate to="/login" />;
  }
}

export default ProtectedRoute;
