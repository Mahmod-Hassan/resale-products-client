
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {
    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['users', 'sellers'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/all-sellers?type=Seller');
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                authorization: `$bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('make admin successfully');
                    refetch();
                }
            })
    }
    return (
        <div className='m-4'>
            <h2 className="text-2xl text-center font-bold mb-4 text-accent">All sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Delete</th>
                            <th>Verify</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            sellers.length > 0
                                ?
                                sellers.map((seller, idx) => <tr
                                    key={seller._id}
                                >
                                    <th>{idx + 1}</th>
                                    <td>{seller.name}</td>
                                    <td>{seller.email}</td>
                                    <td>{
                                        seller?.role === 'admin'
                                            ?
                                            <button className='btn btn-sm btn-primary'>Admin</button>
                                            :
                                            <button onClick={() => handleMakeAdmin(seller._id)} className='btn btn-sm'>Make Admin</button>
                                    }</td>
                                    <td><button className='btn btn-error'>Delete</button></td>
                                    <td><button className='btn btn-accent'>Verify</button></td>
                                </tr>)
                                :
                                <tr className='text-center text-xl text-primary'>No Seller Found</tr>

                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;