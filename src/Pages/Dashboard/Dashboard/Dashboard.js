import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
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
                    <Link to='/dashboard/all-buyers' className='hover:bg-slate-300 p-3 bg-slate-100 my-3'>All Buyers</Link>
                    <Link to='/dashboard/all-sellers' className='hover:bg-slate-300 p-3 bg-slate-100'>All Sellers</Link>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;