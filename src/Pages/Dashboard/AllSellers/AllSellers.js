
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import toast from 'react-hot-toast';

const AllSellers = () => {

    const { data: sellers = [], refetch } = useQuery({
        queryKey: ['all-sellers'],
        queryFn: async () => {
            const res = await fetch('https://assigntment-12-server.vercel.app/all-sellers?type=seller');
            const data = await res.json();
            return data;
        }
    })
    const handleMakeAdmin = id => {
        fetch(`https://assigntment-12-server.vercel.app/users/admin/${id}`, {
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

    const handleSellerDelete = id => {
        const proceed = window.confirm('are u sure want to DELETE');
        if (proceed) {
            fetch(`https://assigntment-12-server.vercel.app/delete-user/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        refetch();
                    }


                })
        }
    }

    const verifySellerHandler = id => {
        fetch(`https://assigntment-12-server.vercel.app/users/seller/${id}`, {
            method: 'PUT',
            headers: {
                authorization: ` bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                refetch()
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
                                    <td><button onClick={() => handleSellerDelete(seller?._id)} className='btn btn-error btn-sm'>Delete</button></td>
                                    {
                                        seller?.verified === true ?
                                            <td><button className='btn btn-disabled btn-sm'>Verified</button></td>
                                            :
                                            <td><button onClick={() => verifySellerHandler(seller?._id)} className='btn btn-accent btn-sm'>Unverify</button></td>
                                    }
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