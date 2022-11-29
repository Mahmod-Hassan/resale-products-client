
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [userType, setUserType] = useState('');
    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:5000/users/${user?.email}`)
                .then(res => res.json())
                .then(data => setUserType(data?.user_type)
                )
        }

    }, [user?.email]);

    const handleLogout = () => {
        logOut();
    }

    const routes = <>
        <Link to='/' className='font-semibold mr-4 hover:text-red-500'>Home</Link>
        <Link to='/blogs' className='font-semibold mr-4 hover:text-red-500'>Blogs</Link>
        {
            user?.uid && <Link to='/dashboard' className='font-semibold mr-4 hover:text-red-500'>Dashboard</Link>
        }
        {
            userType === 'seller' && <Link to='/add-product' className='font-semibold mr-4 hover:text-red-500'>AddAProduct</Link>
        }
        {
            user?.uid ?
                <>
                    <span>{user?.email} </span> <button className='btn btn-sm text-white sm:mb-4 md:mb-0 mx-4'>{userType}</button>
                    <button onClick={handleLogout} className="btn btn-outline btn-error  sm:btn-sm md:btn-md rounded">Logout</button>
                    <img src={user?.photoUrl} alt="" />
                </>
                :
                <>
                    <Link className='btn mr-4 btn-outline btn-primary sm:btn-sm md:btn-md rounded' to='/login'>Login</Link>
                    <Link className='btn btn-outline sm:btn-sm md:btn-md rounded' to='/register'>SignUp</Link>
                </>
        }
    </>


    return (
        <div>
            <div className="navbar border bg-base-300">


                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64">
                            <li className='grid gap-2'>{routes}</li>
                        </ul>
                    </div>
                    <Link to='/' className='btn btn-ghost text-xl'>Mobile Bazar</Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 items-center">
                        {routes}
                    </ul>
                </div>
                <div className="navbar-end">
                    <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;