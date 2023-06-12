import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../Layout/DashboardLayout';
import Main from '../../Layout/Main';
import Account from '../../Pages/Account/Account';
import AddProduct from '../../Pages/AddProduct/AddProduct';
import Blogs from '../../Pages/Blogs/Blogs';
import AllBuyers from '../../Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from '../../Pages/Dashboard/AllSellers/AllSellers';
import MyOrders from '../../Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from '../../Pages/Dashboard/MyProducs/MyProducts';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Login/Login';
import NotFound from '../../Pages/NotFound/NotFound';
import Register from '../../Pages/Register/Register';
import GetProductsByCategoryId from '../../Pages/ResaleProducts/GetProductsByCategoryId/GetProductsByCategoryId';
import DisplayError from '../../Pages/Shared/DisplayError/DisplayError';
import AdminRoute from '../AdminRoute/AdminRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import SellerRoute from '../SellerRoute/SellerRoute';



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/category/:products',
                element: <PrivateRoute><GetProductsByCategoryId></GetProductsByCategoryId></PrivateRoute>,
                loader: async ({ params }) => await fetch(`https://assigntment-12-server.vercel.app/category-products?category=${params.products}`)
            },
           {
            path : '/create-account-with',
            element: <Account></Account>,
            children: [
                {
                    path: '/create-account-with/login',
                    element: <Login></Login>
                },
                {
                    path: '/create-account-with/register',
                    element: <Register></Register>
                },
            ]
           },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/add-product',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <DisplayError></DisplayError>,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            // {
            //     path: '/dashboard/payment/:id',
            //     element: <Payment></Payment>,
            //     loader: ({ params }) => fetch(`https://assigntment-12-server.vercel.app/payment-order/${params.id}`)
            // },
        ]
    },
    {
        path: '*',
        element: <NotFound></NotFound>
    }
])
export default router;