import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [] } = useQuery({
        queryKey: ['/orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-orders?email=${user?.email}`, {
                headers: { authorization: `bearer ${localStorage.getItem('accessToken')}` }
            });
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center mb-4 text-primary font-bold">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Product</th>
                            <th>Title</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length > 0
                                ?
                                orders.map((order, idx) => <tr
                                    key={idx}
                                >
                                    <th>{idx + 1}</th>
                                    <td><img className='w-20 h-16' src={order.photoUrl}></img></td>
                                    <td>{order.product_name}</td>
                                    <td>{order.price}</td>
                                    <button className='btn btn-outline w-full mt-4'>Pay</button>
                                </tr>)
                                :
                                <tr className='text-center text-xl text-primary'>please order something</tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;