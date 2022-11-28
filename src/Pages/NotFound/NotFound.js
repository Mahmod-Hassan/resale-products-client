import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center h-screen'>
            <Link to='/' className='btn btn-primary mt-5'>Go to the home page</Link>
            <img src="https://img.freepik.com/free-vector/oops-404-error-with-broken-robot-concept-illustration_114360-1932.jpg?w=2000" alt="" className='h-full w-full' />
        </div>
    );
};

export default NotFound;