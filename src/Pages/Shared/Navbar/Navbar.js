import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    console.log(user);
    const handleLogout = () => {
        logOut();
    }
    const routes = <>
        <Link to='/' className='font-semibold mr-4 hover:text-red-500'>Home</Link>
        {
            user?.uid &&
            <>
                <select className="select select-bordered w-28 sm:my-4 md:m-0 md:mr-4">
                    <option>Buyer</option>
                    <option>seller</option>
                </select>
                <Link to='/dashboard' className='font-semibold mr-4 hover:text-red-500'>Dashboard</Link>
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
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>{routes}</li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0 items-center">
                        {routes}
                    </ul>
                </div>

                <div className="navbar-end">
                    {
                        user?.uid ?
                            <>
                                <span>{user?.email}</span>
                                <button onClick={handleLogout} className="btn btn-outline btn-error btn-xs sm:btn-sm md:btn-md rounded mx-4">Logout</button>
                                <img src={user?.photoUrl} alt="" />
                            </>
                            :
                            <>
                                <Link className='btn mr-4 btn-outline btn-primary btn-xs sm:btn-sm md:btn-md rounded' to='/login'>Login</Link>
                                <Link className='btn btn-outline btn-xs sm:btn-sm md:btn-md rounded' to='/register'>SignUp</Link>
                            </>
                    }
                    <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>
        </div>
    );
};

export default Navbar;