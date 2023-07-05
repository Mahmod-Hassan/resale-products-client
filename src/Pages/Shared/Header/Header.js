
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useApiRequest from '../../../hooks/useApiRequest';

const Header = () => {
    const {user, logOut } = useContext(AuthContext);
    const [userType, setUserType] = useState('');
    // get user type
    const { sendRequest } = useApiRequest();
    useEffect(() => {
        sendRequest(`https://mobile-bazar-server-jet.vercel.app/user/${user?.email}`,'GET')
        .then(data => setUserType(data.userType))
        .catch(err => console.log(err))
    },[])

    // const [open,setOpen] = useState(false);
    const handleLogout = () => {
        logOut()
            .then(res => {})
            .catch(error => console.log(error))
    }

    const routes = <>
        <Link to='/' className='mr-4'>Home</Link>
        <Link to='/blogs' className='mr-4'>Blogs</Link>
        {
            user?.email && 
            <Link to='/dashboard' className='mr-4'>Dashboard</Link>
        }
        {
            userType === 'seller' && <Link to='/add-product' className='mr-4'>AddAProduct</Link>
        }
        {
            user?.email ?
                <>
                    <span className='text-gray-600'>{user?.email} </span>
                    <span><button onClick={handleLogout} className="btn btn-primary  btn-sm md:btn-md rounded">Logout</button></span>
                    <img className='w-16 h-16 rounded-full border ml-5' src={user?.photoURL} alt="" />
                </>
                :
                <>
                    <Link className='btn mr-4 btn-primary sm:btn-sm md:btn-md rounded' to='/create-account-with/login'>Login</Link>
                </>
        }
    </>


    return (
        // this is navbar container
            <div className="flex justify-between items-center border-b sticky top-0 z-40 px-5 bg-gray-100 h-20">

{/* this is the navbar start point this is button and hidden 3 line icon */}
                <div className="flex">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64">
                            <li className='grid gap-2'>{routes}</li>
                        </ul>
                    </div>
                    <Link to='/' className='text-3xl flex items-center font-bold'> <img className="w-8 h-7 mx-auto" src="https://merakiui.com/images/logo.svg" alt="" /> obile <span className='text-blue-600 ml-4'> B</span>azar</Link>
                </div>

                {/* navbar routes for lerger device */}
                <div className="hidden lg:flex">
                <ul className="flex items-center font-medium">
                        {routes}
                </ul>
                </div>
                <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>


    );
};

export default Header;

