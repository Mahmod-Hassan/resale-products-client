import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <Loader></Loader>
    }

    else if (user) {
        return children;
    }
    else{
      return <Navigate to="/create-account-with/login" state={{ from: location }} replace></Navigate>;
    }
    
};

export default PrivateRoute;