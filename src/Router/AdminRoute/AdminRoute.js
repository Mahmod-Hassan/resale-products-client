import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from '../../Pages/Shared/Loader/Loader';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import useUserType from '../../hooks/useUserType';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    // when checking user type I am handlin isLoading state
    const {userType, isLoading} = useUserType(user?.email);

    const location = useLocation();

    if (loading || isLoading) {
        return <Loader></Loader>
    }

    if (user && userType === 'admin') {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoute;