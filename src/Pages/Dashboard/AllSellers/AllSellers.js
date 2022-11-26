import React, { useEffect, useState } from 'react';

const AllSellers = () => {
    const [sellers, setSellers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/users/sellers?type=Seller')
            .then(res => res.json())
            .then(data => {
                setSellers(data)
            })
    }, [])
    return (
        <div className='m-4'>
            <h2 className="text-2xl">All sellers</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>Name</th>
                            <th>Email</th>
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