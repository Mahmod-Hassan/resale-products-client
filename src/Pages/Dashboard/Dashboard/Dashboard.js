import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useAdmin from '../../../hooks/useAdmin';
import useSeller from '../../../hooks/useSeller';

const Dashboard = () => {
    const { user } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    return (
        <div className="drawer drawer-mobile border">
            <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">

                {/* main content here */}
                <Outlet></Outlet>

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    {/* sidebar content here */}
                    <Link to='/dashboard' className='hover:bg-slate-300 p-3 bg-slate-100'>My Orders</Link>

                    {
                        (isSeller || isAdmin) &&
                        <Link to='/dashboard/my-products' className='hover:bg-slate-300 p-3 bg-slate-100 my-3'>My Products</Link>
                    }
                    {
                        isAdmin && <>
                            <Link to='/dashboard/all-buyers' className='hover:bg-slate-300 p-3 bg-slate-100 my-3'>All Buyers</Link>
                            <Link to='/dashboard/all-sellers' className='hover:bg-slate-300 p-3 bg-slate-100'>All Sellers</Link>
                        </>
                    }
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;