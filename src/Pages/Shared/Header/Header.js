
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // const [open,setOpen] = useState(false);
    // console.log(user);
    // const [userType, setUserType] = useState('');
    // useEffect(() => {
    //     if (user?.email) {
    //         fetch(`https://assigntment-12-server.vercel.app/users/${user?.email}`, {
    //             headers: {
    //                 authorization: `bearer ${localStorage.getItem('accessToken')}`
    //             }
    //         })
    //             .then(res => res.json())
    //             .then(data => setUserType(data?.user_type)
    //             )
    //     }

    // }, [user?.email]);

    const handleLogout = () => {
        logOut()
            .then(res => { })
            .catch(error => console.log(error))
    }

    const routes = <>
        <Link to='/' className='mr-4'>Home</Link>
        <Link to='/blogs' className='mr-4'>Blogs</Link>
        {
            user?.uid && <Link to='/dashboard' className='mr-4'>Dashboard</Link>
        }
        {
            user?.user_type === 'seller' && <Link to='/add-product' className='mr-4'>AddAProduct</Link>
        }
        {
            user?.uid ?
                <>
                    <span className='text-gray-600'>{user?.email} </span> <button className='btn btn-sm text-white  sm:mb-4 md:mb-0 mx-4'>{user?.user_type}</button>
                    <span><button onClick={handleLogout} className="btn btn-primary  btn-sm md:btn-md rounded">Logout</button></span>
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
        // this is navbar container
            <div className="navbar px-20 bg-gray-100">

{/* this is the navbar start point this is button and hidden 3 line icon */}
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-64">
                            <li className='grid gap-2'>{routes}</li>
                        </ul>
                    </div>
                    <Link to='/' className='text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-500 to-yellow-500'>Mobile Bazar</Link>
                </div>

                {/* navbar end is here where links are include */}
                <div className="navbar-end hidden lg:flex">
                <ul className="p-0 flex items-center font-medium">
                        {routes}
                    </ul>
                    <label tabIndex={2} htmlFor="dashboard-drawer" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                </div>
            </div>


    );
};

export default Header;

