import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) { return <h1>Loading...</h1>; }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/singin" state={{ from: location }} />;

};

export default PrivateRoute;
