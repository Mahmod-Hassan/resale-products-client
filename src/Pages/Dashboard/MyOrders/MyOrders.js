import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [] } = useQuery({
        queryKey: ['/orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/orders?email=${user?.email}`);
            const data = await res.json();
            return data;
        }
    })
    return (
        <div className='m-4'>
            <h2 className="text-2xl">My Orders</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product</th>
                            <th>Email</th>
                            <th>Buyer Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, idx) => <tr className="hover">
                                <th>{idx + 1}</th>
                                <td>{order.product_name}</td>
                                <td>{order.email}</td>
                                <td>{order.buyer_name}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;