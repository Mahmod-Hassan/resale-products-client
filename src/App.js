
import { useContext } from 'react';
import { Toaster } from 'react-hot-toast';
import { Route, Routes } from 'react-router-dom';
import DashboardLayout from './Layout/DashboardLayout';
import Main from './Layout/Main';
import Account from './Pages/Account/Account';
import AddProduct from './Pages/AddProduct/AddProduct';
import Blogs from './Pages/Blogs/Blogs';
import AllBuyers from './Pages/Dashboard/AllBuyers/AllBuyers';
import AllSellers from './Pages/Dashboard/AllSellers/AllSellers';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import MyProducts from './Pages/Dashboard/MyProducs/MyProducts';
import Payment from './Pages/Dashboard/Payment/Payment';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import GetProductsByCategoryId from './Pages/ResaleProducts/GetProductsByCategoryId/GetProductsByCategoryId';
import AdminRoute from './Router/AdminRoute/AdminRoute';
import PrivateRoute from './Router/PrivateRoute/PrivateRoute';
import SellerRoute from './Router/SellerRoute/SellerRoute';
import { AuthContext } from './context/AuthProvider/AuthProvider';

function App() {
  const {user} = useContext(AuthContext);
  console.log(user);
  return (
    <div>
      {/* <RouterProvider router={router}></RouterProvider> */}
      <Routes>
            <Route path='/' element={<Main />}>
                <Route path='/' element={<Home />} />
                <Route path='/category/:name' element={<PrivateRoute><GetProductsByCategoryId /></PrivateRoute>} />
                <Route path='/create-account-with' element={<Account />} >
                    <Route path='/create-account-with/login' element={<Login />} />
                    <Route path='/create-account-with/register' element={<Register />} />
                </Route>
                <Route path='/blogs' element={<Blogs />} />
                <Route path='/add-product' element={<SellerRoute><AddProduct /></SellerRoute>} />
            </Route>
                
                
                <Route path='/dashboard' element={<PrivateRoute><DashboardLayout /></PrivateRoute>}>
                      <Route path='/dashboard' element={user?.role === 'isSeller' || 'isAdmin' ? <MyProducts />:  <MyOrders />} />
                      <Route path='/dashboard/all-buyers' element={<AdminRoute><AllBuyers /></AdminRoute>} />
                      <Route path='/dashboard/all-sellers' element={<AdminRoute><AllSellers /></AdminRoute>} />
                      <Route path='/dashboard/payment/:id' element={<Payment />} 
                      loader={({ params }) => fetch(`https://mobile-bazar-server-jet.vercel.app/payments/order/${params.id}`)}/>
                </Route>
                
            </Routes>
      <Toaster></Toaster>
    </div>
  );
}

export default App;
