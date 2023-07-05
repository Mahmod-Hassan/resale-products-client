import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import useGetRequest from '../../../hooks/useGetRequest';
import { deleteOrder } from '../../../utils/handleOrderApi';
import Loader from '../../Shared/Loader/Loader';

const MyOrders = () => {
    // get user from context bcz I need user email
    const { user } = useContext(AuthContext);
    const {data:orders, loading} = useGetRequest(`https://mobile-bazar-server-jet.vercel.app/order?email=${user?.email}`);
    if(loading){
        return <Loader></Loader>
    }
    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center mb-4 text-blue-500  font-bold">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Photo</th>
                            <th>Phone Name</th>
                            <th>Price</th>
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
        
                            {
                                orders.length && 
                                orders.map((order,i) => <tr key={i}>
                                <td>{i + 1}</td>
                                <td><img className='w-20 h-16' src={order?.photoUrl} alt=""></img></td>
                                <td>{order?.productName}</td>
                                <td>{order?.price}</td>
                                <td> 
                                    <button onClick={() => deleteOrder(order?._id)} className='btn btn-error btn-sm w-full mt-4'>Delete
                                    </button>
                                </td> 
                                <td> {
                                   order?.paid ?
                                        <button className='btn btn-success btn-sm w-full mt-4'>paid</button>
                                        :
                                        <Link to={`/dashboard/payment/${order?._id}`}>
                                            <button className='btn btn-outline btn-sm w-full mt-4'>Pay</button>
                                        </Link>
                                    }
                                </td>
                                </tr>)
                            }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;

                                
                               
                               
                             