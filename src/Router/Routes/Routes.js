import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import Register from '../../Pages/Register/Register';
import GetProductsByCategoryId from '../../Pages/ResaleProducts/GetProductsByCategoryId/GetProductsByCategoryId';
import PrivateRoute from '../PrivateRoute/PrivateRoute';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:id',
                element: <PrivateRoute><GetProductsByCategoryId></GetProductsByCategoryId></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AllSellers></AllSellers>
            },
        ]
    }
])
export default router;