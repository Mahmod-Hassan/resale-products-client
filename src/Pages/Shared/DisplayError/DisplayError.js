import React, { useContext } from 'react';
import { useNavigate, useRouteError } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const DisplayError = () => {
    const navigate = useNavigate();
    const { logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(res => {
                navigate('/login')
            })
            .catch(error => { })
    }
    const error = useRouteError();
    return (
        <div>
            <p className='text-error'>something went wrong</p>
            <p className='text-error'>{error.statusText || error.message}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
};

export default DisplayError;