import React from 'react';
import Dashboard from '../Pages/Dashboard/Dashboard/Dashboard';
import Header from '../Pages/Shared/Header/Header';

const DashboardLayout = () => {
    return (
        <div>
            <Header></Header>
            <Dashboard></Dashboard>
        </div>
    );
};

export default DashboardLayout;