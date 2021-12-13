import React from 'react';
import { Navigate, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';
import CircularProgress from '@mui/material/CircularProgress';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useAuth();
    const location = useLocation();
    if (loading) { return <div className='flex h-screen justify-center items-center'><CircularProgress /></div>; }
    if (user?.email) {
        return children;
    }
    return <Navigate to="/singin" state={{ from: location }} />;

};

export default PrivateRoute;
