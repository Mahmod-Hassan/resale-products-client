import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const MyOrders = () => {
    const { user } = useContext(AuthContext);
    const { data: orders = [], refetch } = useQuery({
        queryKey: ['my-orders', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/my-orders?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    const handleOrderDelete = id => {
        fetch(`http://localhost:5000/delete-order/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    toast.success('deleted successfully');
                    refetch();
                }
            })
    }
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
                            <th>Delete</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.length &&

                            orders.map((order, idx) => <tr
                                key={idx}
                            >
                                <th>{idx + 1}</th>
                                <td><img className='w-20 h-16' src={order?.photoUrl} alt=""></img></td>
                                <td>{order?.productName}</td>
                                <td>{order?.price}</td>
                                <td>   <button onClick={() => handleOrderDelete(order?._id)} className='btn btn-error btn-sm w-full mt-4'>Delete</button></td>
                                <td> {order?.paid ?
                                    <button className='btn btn-success btn-sm w-full mt-4'>paid</button>
                                    :
                                    // <Link to={`/dashboard/payment/${order?._id}`}>
                                    //     <button className='btn btn-outline btn-sm w-full mt-4'>Pay</button>
                                    // </Link>
                                    <button className='btn btn-outline btn-sm w-full mt-4'>Pay</button>
                                }</td>

                            </tr>)

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;